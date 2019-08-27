import {combineReducers} from 'redux';
import LoadingReducer from './loadingReducer';
import ErrorReducer from './errorReducer';
import LoadmoreReducer from './loadmoreReducer';
import RefreshReducer from './refreshReducer';
import ConfigsReducer from './ConfigsReducer';
import HomeReducer from 'screens/HomeScreen/reducer';
import actions from 'actions';

const appReducer = combineReducers({
  loading: LoadingReducer,
  loadmore: LoadmoreReducer,
  error: ErrorReducer,
  refresh: RefreshReducer,
  configs: ConfigsReducer,
  home: HomeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actions.userTypes.LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
