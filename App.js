/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from 'navigation';
import NavigationService from 'services/NavigationService';
import {Provider} from 'react-redux';
import store from 'store';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Provider store={store}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <RootNavigation
          onNavigationStateChange={NavigationService.onNavigationStateChange}
          ref={ref => (NavigationService.navigator = ref)}
        />
      </Provider>
    );
  }
}
