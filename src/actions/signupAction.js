import { config } from '../config';
import axios from 'axios';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

const signupUser = (user) => {
  return dispatch => {
    dispatch(signupRequest(user));
    return axios.post(`${config.url.BASE_URL}/signup`, user)
    .then((response) => {
      dispatch(signupSuccess(response));
    })
    .catch((error) => {
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

export { signupUser }