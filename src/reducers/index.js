import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import signupReducer from './signupReducer';

export default combineReducers({auth: authReducer, alert: alertReducer, signup: signupReducer});