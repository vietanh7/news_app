import * as UserActions from './UserActions';
import * as ConfigsActions from './ConfigsActions';
import * as HomeActions from 'screens/HomeScreen/actions';

export default {
  ...UserActions,
  ...ConfigsActions,
  ...HomeActions,
};
