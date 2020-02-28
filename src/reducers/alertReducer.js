import { ALERT_ERROR, ALERT_SUCCESS, ALERT_CLEAR } from '../actions/types';

const alertReducer = (state = {}, action) => {
  switch(action.type) {
    case ALERT_SUCCESS:
      const { message } = action.payload;
      return {
        type: 'alert-success',
        message
      };
    case ALERT_ERROR:
      const { message } = action.payload;
      return {
        type: 'alert-danger',
        message
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }

}

export default alertReducer;