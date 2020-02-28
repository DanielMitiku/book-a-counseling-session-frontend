import { SET_CURRENT_USER_ID, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types';
import setAuthorizationToken from '../utils/auth_header';
import { alert_success, alert_error } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';
import jwtDecode from 'jwt-decode';

const loginUser = (userData, history) => {
  return dispatch => {
    dispatch(loginRequest(userData));
    return axios.post(`${config.url.BASE_URL}/auth/login`, userData)
    .then((response) => {
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      const user_id = jwtDecode(token).user_id;
      dispatch(setCurrentUserId(user_id));
      dispatch(loginSuccess(user_id));
      dispatch(alert_success('Login successful!'));
      history.push('/');
    })
    .catch((error) => {
      dispatch(alert_error(error));
      dispatch(loginFailure(error));
    });
  }
}

const loginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    user
  }
}

const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

const setCurrentUserId = (user_id) => {
  return {
    type: SET_CURRENT_USER_ID,
    user_id
  }
}

const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUserId({}));
    dispatch(logoutSuccess());
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export { setCurrentUserId, loginFailure, loginRequest, loginSuccess, loginUser, logout };