import {
  StackActions,
  NavigationActions,
  DrawerActions,
} from 'react-navigation';

function getCurrentRouteData(navigationState) {
  // console.log(navigationState);

  if (!navigationState) {
    return null;
  }
  const route = navigationState ?.routes ?.[navigationState.index];
  // dive into nested navigators
  if (route ?.routes) {

    return getCurrentRouteData(route);
  }
  return { routeName: route ?.routeName, params: route ?.params };
}
class NavigationService {
  navigator = null;
  currentRouterName = null;
  currentRouteParams = null;
  loading = null;
  bottomActionSheet = null;
  drawer = null;
  bottomSheet = null;
  primaryModal = null;
  adRequest = null;

  showAlert = (body, source, onModalHide, isConfetti) => {
    this.primaryModal &&
      this.primaryModal.show(body, source, onModalHide, isConfetti);
  };

  hideAlert = () => {
    this.primaryModal && this.primaryModal.close();
  };

  showBottomSheet = (component, props, component2) => {
    this.bottomSheet && this.bottomSheet.show(component, props, component2);
  };

  hideBottomSheet = () => {
    this.bottomSheet && this.bottomSheet.hide();
  };

  pushToScreen = (routeName, params = null, resultCallback = null) => {
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params: params ? { ...params, resultCallback } : { resultCallback },
        })
      );
  };

  forcePushScreen = (routeName, params = null) => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.push({
          routeName,
          params,
        })
      );
  };

  resetToScreen = routeName => {
    const resetActions = {
      type: NavigationActions.NAVIGATE,
      routeName,
      action: {
        type: StackActions.RESET,
        index: 0,
        actions: [{ type: NavigationActions.NAVIGATE, routeName }],
      },
    };
    this.navigator && this.navigator.dispatch(resetActions);
  };

  reset = (routeName, params = null) => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName, params })],
        })
      );
  };

  replace = (routeName, params = null) => {
    this.navigator &&
      this.navigator.dispatch(
        StackActions.replace({
          routeName,
          params,
          //actions: [NavigationActions.navigate({ routeName, params })],
        })
      );
  };

  logout = () => {

  };

  goBack = (n = 1, resultData = null) => {
    if (
      resultData &&
      this.currentRouteParams &&
      this.currentRouteParams.resultCallback
    ) {
      this.currentRouteParams.resultCallback(resultData);
    }

    this.navigator &&
      this.navigator.dispatch(
        StackActions.pop({
          n,
        })
      );
  };

  popToTop = () => {
    this.navigator && this.navigator.dispatch(StackActions.popToTop());
  };

  openDrawer = () => {
    // this.drawer && this.drawer.open();
    this.navigator && this.navigator.dispatch(DrawerActions.openDrawer());
  };

  closeDrawer = () => {
    this.drawer && this.drawer.close();
    this.navigator && this.navigator.dispatch(DrawerActions.closeDrawer());
  };

  onNavigationStateChange = (prevState, currentState) => {
    const { routeName, params } = getCurrentRouteData(currentState);
    this.currentRouterName = routeName;
    this.currentRouteParams = params;
  };

  showLoading() {
    this.loading && this.loading.show();
  }

  hideLoading() {
    this.loading && this.loading.hide();
  }

  showActionSheet = options => {
    this.bottomActionSheet && this.bottomActionSheet.show(options);
  };

  close = () => {
    this.navigator && this.navigator.dispatch(NavigationActions.back());
  };
}

export default new NavigationService();
