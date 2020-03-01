import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import signupReducer from './signupReducer';
import userReducer from './userReducer';

export default combineReducers({auth: authReducer, alert: alertReducer, signup: signupReducer, user: userReducer});