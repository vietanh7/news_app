import React, {Component} from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from 'actions';
import NavigationService from 'services/NavigationService';
import ScreenID, {StackID} from 'common/ScreenID';

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch),
)
export default class SplashScreen extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.getCategories();
    NavigationService.reset(StackID.AppNavigator);
  }
  render() {
    return <View style={styles.container}>
      <Image source={require("../../../assets/images/logo_app.png")} style={styles.logoApp} />
    </View>;
  }
}
