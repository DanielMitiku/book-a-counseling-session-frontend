import { ALERT_ERROR, ALERT_SUCCESS, ALERT_CLEAR } from '../actions/types';

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload,
      };
    case ALERT_ERROR:
      return {
        type: 'alert-danger',
        message: action.payload,
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
