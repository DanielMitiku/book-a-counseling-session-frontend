import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import signupReducer from './signupReducer';
import sessionReducer from './sessionReducer';
import appointmentReducer from './appointmentReducer';

export default combineReducers({auth: authReducer, alert: alertReducer, signup: signupReducer, session: sessionReducer, appointment: appointmentReducer});