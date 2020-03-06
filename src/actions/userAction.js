import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './types';
import { alert_error, alert_success } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';


const getUsers = () => {
  return dispatch => {
    dispatch(getUsersRequest());
    return axios.get(`${config.url.BASE_URL}/users`)
    .then((response) => {
      const users = response.data;
      dispatch(getUsersSuccess(users));
    })
    .catch((error) => {
      dispatch(alert_error("Error Getting Users"));
      dispatch(getUsersFailure(error));
    });
  }
}

const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  }
}

const getUsersSuccess = (payload) => {
  return {
    type: GET_USERS_SUCCESS,
    payload
  }
}

const getUsersFailure = (payload) => {
  return {
    type: GET_USERS_FAILURE,
    payload
  }
}

const getUser = (user_id) => {
  return dispatch => {
    dispatch(getUserRequest());
    return axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then((response) => {
      const user = response.data;
      dispatch(getUserSuccess(user));
    })
    .catch((error) => {
      dispatch(alert_error("Error Getting Profile"));
      dispatch(getUserFailure(error));
    });
  }
}

const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  }
}

const getUserSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload
  }
}

const getUserFailure = (payload) => {
  return {
    type: GET_USER_FAILURE,
    payload
  }
}

const deleteUser = (id) => {
  return dispatch => {
    dispatch(deleteUserRequest());
    return axios.delete(`${config.url.BASE_URL}/users/${id}`)
    .then(() => {
      dispatch(deleteUserSuccess(id));
      dispatch(alert_success('User Removed'));
      dispatch(getUsers());
    })
    .catch(() => {
      dispatch(alert_error("Error Deleting User"));
      dispatch(deleteUserFailure());
    });
  }
}

const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  }
}

const deleteUserSuccess = (payload) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload,
  }
}

const deleteUserFailure = () => {
  return {
    type: DELETE_USER_FAILURE,
  }
}

export { getUser, getUserFailure, getUserRequest, getUserSuccess, deleteUser, deleteUserFailure, deleteUserRequest, deleteUserSuccess, getUsers, getUsersRequest, getUsersSuccess, getUsersFailure };