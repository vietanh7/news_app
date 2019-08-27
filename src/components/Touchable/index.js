import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";
import PropTypes from "prop-types";
import AppDimens from "common/AppDimens";
export default class Touchable extends PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
  };
  static defaultProps = {
    style: {},
    onPress: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, style, onPress, ...other } = this.props;

    if (Platform.OS == "android")
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          {...other}
          background={TouchableNativeFeedback.Ripple("grey")}
        >
          <View style={style}>{children}</View>
        </TouchableNativeFeedback>
      );

    return (
      <TouchableOpacity
        style={style}
        activeOpacity={this.props.activeOpacity || AppDimens.activeOpacity}
        onPress={onPress}
        {...other}
      >
        {children}
      </TouchableOpacity>
    );
  }
}
