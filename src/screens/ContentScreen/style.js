import {StyleSheet} from 'react-native';
import AppDimens from 'common/AppDimens';
import AppStyles from 'common/AppStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: AppDimens.extraTop,
  },
  header: {
    ...AppStyles.rowCenterStyle,
    height: 52,
    justifyContent: 'space-between',
  },
});
