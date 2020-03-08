import { ALERT_ERROR, ALERT_SUCCESS, ALERT_CLEAR } from './types';


const alert_success = payload => ({
  type: ALERT_SUCCESS,
  payload,
});

const alert_error = payload => ({
  type: ALERT_ERROR,
  payload,
});

const alert_clear = () => ({
  type: ALERT_CLEAR,
});

export { alert_error, alert_success, alert_clear };
