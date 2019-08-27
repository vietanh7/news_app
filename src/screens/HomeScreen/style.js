import {StyleSheet} from 'react-native';
import AppStyles from 'common/AppStyles';
import AppDimens from 'common/AppDimens';
import AppColors from 'common/AppColors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: AppDimens.extraTop,
    paddingBottom: AppDimens.extraBottom,
  },
  logoApp: {
    height: 52,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tag: {
    ...AppStyles.rowCenterStyle,
    flexWrap: 'wrap',
  },
  jobViews: {
    ...AppStyles.rowCenterStyle,
    height: 40,
    width: '100%',
    marginBottom: 10,
  },
  btnJob: {
    flex: 1,
    height: 40,
    ...AppStyles.centerStyle,
  },
  btnCate: {
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    ...AppStyles.centerStyle,
  },
  horizontalView: {
    flexGrow: 0,
    flex: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppColors.primary,
  },
  activeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppColors.accent,
  },
  containerItem: {
    backgroundColor: AppColors.lightGrey,
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: AppColors.primaryDark,
  },
  titleArtical: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppColors.primaryDark,
  },
  sourceArtical: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.accent,
    marginTop: 10,
  },
  tagText: {
    fontSize: 14,
    color: AppColors.primaryDark,
    fontWeight: '400',
    marginRight: 10,
    marginTop: 10,
  },
  time: {
    fontSize: 12,
    color: AppColors.primaryDark,
    marginTop: 5,
  },
});
