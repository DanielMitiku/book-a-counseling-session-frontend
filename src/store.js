import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/auth_header';
import jwtDecode from 'jwt-decode';
import history from "./utils/history";
import { loginSuccess, loginFailure, setCurrentUserId, loginRequest } from './actions/authAction';
import axios from 'axios';
import { config } from './utils/config';

const initialState = {

};

  const store = createStore( rootReducer, initialState, applyMiddleware(thunk) );

  if (localStorage.jwtToken) {
    store.dispatch(loginRequest());
    const user_id = jwtDecode(localStorage.jwtToken).user_id;
    setAuthorizationToken(localStorage.jwtToken);
    axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then(() => {
      store.dispatch(setCurrentUserId(user_id));
      store.dispatch(loginSuccess(user_id));
    })
    .catch((error) => {
      store.dispatch(loginFailure(error));
      setAuthorizationToken(false);
      history.push('/login');
    });
  }

  export default store;