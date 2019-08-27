import {Icon} from 'react-native-elements';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VectorIcon extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      'custom',
      'material',
      'material-community',
      'font-awesome',
      'octicon',
      'ionicon',
      'foundation',
      'evilicon',
      'simple-line-icon',
      'zocial',
      'entypo',
      'feather',
      'antdesign',
    ]),
  };
  static defaultProps = {
    type: 'material',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {type, ...other} = this.props;
    return <Icon type={type} {...other} />;
  }
}
