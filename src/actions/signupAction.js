import { config } from '../utils/config';
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import { alert_success, alert_error } from './alertAction';
import history from "../utils/history";
import setAuthorizationToken from '../utils/auth_header';
import jwtDecode from 'jwt-decode';
import { setCurrentUserId, loginSuccess } from './authAction';


const signupUser = (user) => {
  return dispatch => {
    dispatch(signupRequest(user));
    return axios.post(`${config.url.BASE_URL}/signup`, user)
    .then((response) => {
      dispatch(signupSuccess(response));
      const token = response.data.auth_token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      const user_id = jwtDecode(token).user_id;
      const is_privileged = jwtDecode(token).is_privileged;
      dispatch(setCurrentUserId(user_id));
      dispatch(loginSuccess(user_id, is_privileged));
      dispatch(alert_success('Signup Successful!'));
      history.push('/');
    })
    .catch((error) => {
      dispatch(alert_error("Signup Error"));
      dispatch(signupFailure(error));
      console.log(error)
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


export { signupUser, signupRequest, signupSuccess, signupFailure }