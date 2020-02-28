  import { ALERT_ERROR, ALERT_SUCCESS } from './types';


  const alert_success = (message_success) => {
    return {
      type: ALERT_SUCCESS,
      message_success
    }
  }

  const alert_error = (message_error) => {
    return {
      type: ALERT_ERROR,
      message_error
    }
  }

  export { alert_error, alert_success };