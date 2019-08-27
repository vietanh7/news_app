import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScreenID, {StackID} from 'common/ScreenID';
import SplashScreen from 'screens/SplashScreen';
import HomeScreen from 'screens/HomeScreen';
import ContentScreen from 'screens/ContentScreen';

const AppNavigator = createStackNavigator(
  {
    [ScreenID.HomeScreen]: {
      screen: HomeScreen,
    },
    [ScreenID.ContentScreen]: {
      screen: ContentScreen,
    },
  },
  {
    initialRouteName: ScreenID.HomeScreen,
    headerMode: 'none',
    mode: 'card',
  },
);

const RootNavigator = createStackNavigator(
  {
    [StackID.AppNavigator]: {screen: AppNavigator},
    [ScreenID.SplashScreen]: {
      screen: SplashScreen,
    },
  },
  {
    initialRouteName: ScreenID.SplashScreen,
    headerMode: 'none',
    mode: 'modal',
  },
);

export default createAppContainer(RootNavigator);
