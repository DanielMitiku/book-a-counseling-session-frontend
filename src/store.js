import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/auth_header';
import { setCurrentUserId } from './actions/authAction';
import jwtDecode from 'jwt-decode';
import history from "./utils/history";
import { loginSuccess } from './actions/authAction';
import { alert_success } from './actions/alertAction';

const initialState = {

};

  const store = createStore( rootReducer, initialState, applyMiddleware(thunk) );

  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    const user_id = jwtDecode(localStorage.jwtToken).user_id;
    store.dispatch(setCurrentUserId(user_id));
    store.dispatch(loginSuccess(user_id));
  }

  export default store;