import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";
import PropTypes from "prop-types";
import AppColors from "common/AppColors";

export default class Spinner extends Component {
  static propTypes = {
    enableOverlay: PropTypes.bool,
    enable: PropTypes.bool,
  };

  static defaultProps = {
    enableOverlay: false,
    enable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      enable: props.enable,
    };
  }

  show = () => {
    this.setState({ enable: true });
  };

  hide = () => {
    this.setState({ enable: false });
  };

  render() {
    const { enableOverlay } = this.props;
    const { enable } = this.state;
    const overlay = enableOverlay
      ? { backgroundColor: "rgba(0, 0, 0, 0.6)" }
      : {};
    if (!enable) return null;
    return (
      <View style={[styles.container, overlay]}>
        <ActivityIndicator color={AppColors.accent} />
      </View>
    );
  }
}
