import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import setAuthorizationToken from './utils/auth_header';
import { setCurrentUserId } from './actions/authAction';
import jwtDecode from 'jwt-decode';

const initialState = {

};

  const store = createStore( rootReducer, initialState, applyMiddleware(thunk) );

  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUserId(jwtDecode(localStorage.jwtToken)));
  }

  export default store;