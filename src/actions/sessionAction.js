import { GET_SESSION_SUCCESS, GET_SESSION_FAILURE, GET_SESSION_REQUEST, DELETE_SESSION_FAILURE, DELETE_SESSION_SUCCESS, DELETE_SESSION_REQUEST, CREATE_SESSION_FAILURE, CREATE_SESSION_SUCCESS, CREATE_SESSION_REQUEST, GET_SESSIONS_REQUEST, GET_SESSIONS_SUCCESS, GET_SESSIONS_FAILURE } from './types';
import { alert_success, alert_error } from './alertAction';
import axios from 'axios';
import { config } from '../utils/config';


const getSessions = () => {
  return dispatch => {
    dispatch(getSessionsRequest());
    return axios.get(`${config.url.BASE_URL}/counselings`)
    .then((response) => {
      const counselings = response.data;
      dispatch(getSessionsSuccess(counselings));
    })
    .catch((error) => {
      dispatch(alert_error("Error Getting Sessions"));
      dispatch(getSessionsFailure(error));
    });
  }
}

const getSessionsRequest = () => {
  return {
    type: GET_SESSIONS_REQUEST,
  }
}

const getSessionsSuccess = (payload) => {
  return {
    type: GET_SESSIONS_SUCCESS,
    payload
  }
}

const getSessionsFailure = (payload) => {
  return {
    type: GET_SESSIONS_FAILURE,
    payload
  }
}

const getSession = (session_id) => {
  return dispatch => {
    dispatch(getSessionRequest());
    return axios.get(`${config.url.BASE_URL}/counselings/${session_id}`)
    .then((response) => {
      const counseling = response.data;
      dispatch(getSessionSuccess(counseling));
    })
    .catch((error) => {
      dispatch(alert_error("Error Getting Session"));
      dispatch(getSessionFailure(error));
    });
  }
}

const getSessionRequest = () => {
  return {
    type: GET_SESSION_REQUEST,
  }
}

const getSessionSuccess = (payload) => {
  return {
    type: GET_SESSION_SUCCESS,
    payload
  }
}

const getSessionFailure = (payload) => {
  return {
    type: GET_SESSION_FAILURE,
    payload
  }
}

const createSession = (counselingData) => {
  return dispatch => {
    dispatch(createSessionRequest());
    return axios.post(`${config.url.BASE_URL}/counselings`, counselingData)
    .then((response) => {
      const counseling = response.data;
      dispatch(getSessions());
      dispatch(alert_success('Session Created'));
      dispatch(createSessionSuccess(counseling));
    })
    .catch((error) => {
      dispatch(alert_error("Error Creating Session"));
      dispatch(createSessionFailure(error));
    });
  }
}

const createSessionRequest = () => {
  return {
    type: CREATE_SESSION_REQUEST,
  }
}

const createSessionSuccess = (payload) => {
  return {
    type: CREATE_SESSION_SUCCESS,
    payload
  }
}

const createSessionFailure = (payload) => {
  return {
    type: CREATE_SESSION_FAILURE,
    payload
  }
}

const deleteSession = (session_id) => {
  return dispatch => {
    dispatch(deleteSessionRequest());
    return axios.delete(`${config.url.BASE_URL}/counselings/${session_id}`)
    .then(() => {
      dispatch(deleteSessionSuccess(session_id));
      dispatch(alert_success('Session Removed'));
      dispatch(getSessions());
    })
    .catch(() => {
      dispatch(alert_error("Error Deleting Session"));
      dispatch(deleteSessionFailure());
    });
  }
}

const deleteSessionRequest = () => {
  return {
    type: DELETE_SESSION_REQUEST,
  }
}

const deleteSessionSuccess = (payload) => {
  return {
    type: DELETE_SESSION_SUCCESS,
    payload,
  }
}

const deleteSessionFailure = () => {
  return {
    type: DELETE_SESSION_FAILURE,
  }
}

export { getSession, getSessionFailure, getSessionRequest, getSessionSuccess, createSession, createSessionFailure, createSessionRequest, createSessionSuccess, deleteSession, deleteSessionFailure, deleteSessionRequest, deleteSessionSuccess, getSessionsFailure, getSessionsRequest, getSessionsSuccess, getSessions };