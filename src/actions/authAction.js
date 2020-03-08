import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  SET_CURRENT_USER_ID, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from './types';
import setAuthorizationToken from '../utils/auth_header';
import { alert_success, alert_error } from './alertAction';
import { config } from '../utils/config';
import history from '../utils/history';


const loginUser = userData => dispatch => {
  dispatch(loginRequest());
  return axios.post(`${config.url.BASE_URL}/auth/login`, userData)
    .then(response => {
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      const { user_id } = jwtDecode(token);
      const { is_privileged } = jwtDecode(token);
      dispatch(setCurrentUserId(user_id));
      dispatch(loginSuccess(user_id, is_privileged));
      dispatch(alert_success('Login Successful!'));
      history.push('/');
    })
    .catch(error => {
      dispatch(alert_error('Login Error'));
      dispatch(loginFailure(error));
    });
};

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user_id, is_privileged = false) => ({
  type: LOGIN_SUCCESS,
  user_id,
  is_privileged,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

const setCurrentUserId = user_id => ({
  type: SET_CURRENT_USER_ID,
  user_id,
});

const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
  dispatch(setCurrentUserId({}));
  dispatch(logoutSuccess());
  history.push('/login');
};

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export {
  setCurrentUserId, loginFailure, loginRequest, loginSuccess, loginUser, logout,
};
