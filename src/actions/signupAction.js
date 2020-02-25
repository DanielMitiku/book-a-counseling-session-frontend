import config from '../config';
import axios from 'axios';

const signupUser = (user) => {
  return dispatch => {
    return axios.post('${config.url.BASE_URL}/signup', user)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }
}