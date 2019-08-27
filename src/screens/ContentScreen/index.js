import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import ContainerView from 'components/ContainerView';
import VectorIcon from 'components/VectorIcon';
import Touchable from 'components/Touchable';
import {WebView} from 'react-native-webview';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';
import NavigationService from 'services/NavigationService';
import ShareUtil from 'utils/ShareUtil';

@withMappedNavigationParams()
export default class ContentScreen extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {artical} = this.props;
    const htmlSource = artical.text ? {html: artical.text} : {uri: artical.url};
    return (
      <ContainerView style={styles.container}>
        <View style={styles.header}>
          <Touchable
            style={{padding: 10}}
            onPress={() => NavigationService.goBack()}>
            <VectorIcon type="feather" name="arrow-left" />
          </Touchable>
          <Touchable
            style={{padding: 10}}
            onPress={() => ShareUtil.share({message: artical.url})}>
            <VectorIcon type="feather" name="share" />
          </Touchable>
        </View>
        <WebView style={{flex: 1}} source={htmlSource} startInLoadingState />
      </ContainerView>
    );
  }
}
