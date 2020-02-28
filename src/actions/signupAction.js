import { config } from '../utils/config';
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SET_CURRENT_USER_ID } from './types';
import { alert_success, alert_error } from './alertAction';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/auth_header'

const signupUser = (user, history) => {
  return dispatch => {
    dispatch(signupRequest(user));
    return axios.post(`${config.url.BASE_URL}/signup`, user)
    .then((response) => {
      dispatch(signupSuccess(response));
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUserId(jwtDecode(token).user_id));
      dispatch(alert_success('Signup successful!'));
      history.push('/');
    })
    .catch((error) => {
      dispatch(alert_error(error));
      dispatch(signupFailure(error));
    });
  }
}

const signupRequest = (user) => {
  return {
    type: SIGNUP_REQUEST,
    user
  }
}

const signupSuccess = (response) => {
  return {
    type: SIGNUP_SUCCESS,
    response
  }
}

const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    error
  }
}

const setCurrentUserId = (user_id) => {
  return {
    type: SET_CURRENT_USER_ID,
    user_id
  }
}

export { signupUser, signupRequest, signupSuccess, signupFailure }