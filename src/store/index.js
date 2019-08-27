import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";
import { logger } from 'redux-logger';

const logs = [];
if (__DEV__) {
  logs.push(logger);
}
const store = createStore(reducers, applyMiddleware(...logs, thunk));

export default store;
