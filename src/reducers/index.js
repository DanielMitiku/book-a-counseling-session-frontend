import { combineReducers } from 'redux';
import authReducer from './authentication';

export default combineReducers({auth: authReducer});