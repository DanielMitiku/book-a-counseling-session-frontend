import { SET_CURRENT_USER } from '../actions/types';

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export { setCurrentUser }