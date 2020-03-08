import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import rootReducer from './reducers';
import setAuthorizationToken from './utils/auth_header';
import history from './utils/history';
import {
  loginSuccess, loginFailure, setCurrentUserId, loginRequest,
} from './actions/authAction';
import { config } from './utils/config';

const initialState = {

};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

if (localStorage.jwtToken) {
  store.dispatch(loginRequest());
  const { user_id } = jwtDecode(localStorage.jwtToken);
  const { is_privileged } = jwtDecode(localStorage.jwtToken);
  setAuthorizationToken(localStorage.jwtToken);
  axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then(() => {
      store.dispatch(setCurrentUserId(user_id));
      store.dispatch(loginSuccess(user_id, is_privileged));
    })
    .catch(error => {
      store.dispatch(loginFailure(error));
      setAuthorizationToken(false);
      history.push('/login');
    });
}

export default store;
