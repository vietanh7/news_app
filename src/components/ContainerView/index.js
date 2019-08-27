import React, { PureComponent } from "react";
import { SafeAreaView, StatusBar, View, Platform } from "react-native";
import { NavigationEvents } from "react-navigation";
import PropTypes from "prop-types";

class ContainerView extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    safeAreaPaddingEnabled: PropTypes.bool,
    navigationTransitionEnabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
  static defaultProps = {
    style: {},
    children: {},
    safeAreaPaddingEnabled: false,
    navigationTransitionEnabled: true,
    onFocus: () => {},
    onBlur: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.statusbarHeight = StatusBar.currentHeight
      ? StatusBar.currentHeight
      : 0;
  }

  componentDidMount() {}

  render() {
    const {
      style,
      children,
      safeAreaPaddingEnabled,
      onFocus,
      onBlur,
    } = this.props;
    // const { transitionType } = this;

    const NavEvent = (
      <NavigationEvents onDidFocus={onFocus} onDidBlur={onBlur} />
    );

    let ContentView;
    if (Platform.OS === "ios") {
      let WrapperView = safeAreaPaddingEnabled ? SafeAreaView : View;
      ContentView = (
        <WrapperView style={[style]}>
          {NavEvent}
          {children}
        </WrapperView>
      );
    } else {
      const paddingTop = safeAreaPaddingEnabled ? this.statusbarHeight : 0;
      ContentView = (
        <View style={[{ paddingTop }, style]}>
          {NavEvent}
          {children}
        </View>
      );
    }
    return ContentView;
  }
}

export default ContainerView;
