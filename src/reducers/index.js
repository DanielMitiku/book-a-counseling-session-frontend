import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import signupReducer from './signupReducer';
import sessionReducer from './sessionReducer';
import appointmentReducer from './appointmentReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer, alert: alertReducer, signup: signupReducer, session: sessionReducer, appointment: appointmentReducer, user: userReducer,
});
