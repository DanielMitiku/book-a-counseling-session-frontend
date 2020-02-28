  import { ALERT_ERROR, ALERT_SUCCESS } from './types';


  const alert_success = (payload) => {
    return {
      type: ALERT_SUCCESS,
      payload
    }
  }

  const alert_error = (payload) => {
    return {
      type: ALERT_ERROR,
      payload
    }
  }

  export { alert_error, alert_success };