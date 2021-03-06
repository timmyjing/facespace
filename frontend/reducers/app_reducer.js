import {combineReducers} from 'redux';

import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  sessions: sessionsReducer,
  errors: errorsReducer,
  ui: uiReducer
});
