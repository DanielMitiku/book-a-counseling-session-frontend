import axios from 'axios';
import {
  DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
} from './types';
import { alert_error, alert_success } from './alertAction';
import { config } from '../utils/config';


const getUsers = () => dispatch => {
  dispatch(getUsersRequest());
  return axios.get(`${config.url.BASE_URL}/users`)
    .then(response => {
      const users = response.data;
      dispatch(getUsersSuccess(users));
    })
    .catch(error => {
      dispatch(alert_error('Error Getting Users'));
      dispatch(getUsersFailure(error));
    });
};

const getUsersRequest = () => ({
  type: GET_USERS_REQUEST,
});

const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  payload,
});

const getUsersFailure = payload => ({
  type: GET_USERS_FAILURE,
  payload,
});

const getUser = user_id => dispatch => {
  dispatch(getUserRequest());
  return axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then(response => {
      const user = response.data;
      dispatch(getUserSuccess(user));
    })
    .catch(error => {
      dispatch(alert_error('Error Getting Profile'));
      dispatch(getUserFailure(error));
    });
};

const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
});

const getUserFailure = payload => ({
  type: GET_USER_FAILURE,
  payload,
});

const deleteUser = id => dispatch => {
  dispatch(deleteUserRequest());
  return axios.delete(`${config.url.BASE_URL}/users/${id}`)
    .then(() => {
      dispatch(deleteUserSuccess(id));
      dispatch(alert_success('User Removed'));
      dispatch(getUsers());
    })
    .catch(() => {
      dispatch(alert_error('Error Deleting User'));
      dispatch(deleteUserFailure());
    });
};

const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

const deleteUserSuccess = payload => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

const deleteUserFailure = () => ({
  type: DELETE_USER_FAILURE,
});

export {
  getUser, getUserFailure, getUserRequest, getUserSuccess, deleteUser, deleteUserFailure, deleteUserRequest, deleteUserSuccess, getUsers, getUsersRequest, getUsersSuccess, getUsersFailure,
};
