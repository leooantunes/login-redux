import { combineReducers } from 'redux';

import { authentication } from './loginReducers';
import { alert } from './alertsReducers';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;