// import {combineReducers} from 'redux';
//
// import entitiesReducer from './entities_reducer';
// import sessionsReducer from './sessions_reducer';
// import errorsReducer from './errors_reducer';
// import uiReducer from './ui_reducer';
//
// export default combineReducers({
//   entities: entitiesReducer,
//   sessions: sessionsReducer,
//   errors: errorsReducer,
//   ui: uiReducer
// });
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';
import appReducer from './app_reducer';

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined
  }

  return appReducer(state, action);
};


export default rootReducer;
