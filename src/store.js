import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/auth_header';
import { setCurrentUserId } from './actions/authAction';
import jwtDecode from 'jwt-decode';
import history from "./utils/history";
import { loginSuccess, loginFailure } from './actions/authAction';
import axios from 'axios';
import { config } from './utils/config';

const initialState = {

};

  const store = createStore( rootReducer, initialState, applyMiddleware(thunk) );

  if (localStorage.jwtToken) {
    const user_id = jwtDecode(localStorage.jwtToken).user_id;
    axios.get(`${config.url.BASE_URL}/users/${user_id}`)
    .then(() => {
      setAuthorizationToken(localStorage.jwtToken);
      store.dispatch(setCurrentUserId(user_id));
      store.dispatch(loginSuccess(user_id));
    })
    .catch((error) => {
      store.dispatch(loginFailure(error));
      history.push('/login');
    });
  }

  export default store;