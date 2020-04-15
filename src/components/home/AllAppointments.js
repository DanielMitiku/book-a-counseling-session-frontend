import React from 'react';
import { connect } from 'react-redux';
import { getAllAppointments, deleteAppointment } from '../../actions/appointmentAction';
import jwtDecode from 'jwt-decode';
import { alert_error } from '../../actions/alertAction';
import history from '../../utils/history';
import Loading from '../shared/Loading';


class AllAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  UNSAFE_componentWillMount() {
    if(localStorage.jwtToken){
      const is_privileged = jwtDecode(localStorage.jwtToken).is_privileged;
      const { alert_error } = this.props;
      if(!is_privileged) {
        alert_error('Not Authorized')
        history.push('/');
      }
    }
  }

  componentDidMount() {
    if(localStorage.jwtToken) {
      const { getAllAppointments } = this.props;
      getAllAppointments();
    }
  }

  deleteHandler = (appointment_id, user_id) => {
    const { deleteAppointment } = this.props;
    deleteAppointment(appointment_id, user_id);
  }

  render() {
    const { appointment } = this.props;
    const loading = <Loading />;

    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>All Appointments Booked by Users</h3>
        {appointment.requesting && loading}
        { appointment.all_appointments && appointment.all_appointments.length === 0 ? <div className="text-center mt-5"> No Appointment booked so far</div> : (
          <div className='row'>
          { appointment.all_appointments && appointment.all_appointments.map(a => {
            return (
              <div key={a.appointment_id} className="card col-sm-6 col-12 text-center mx-auto px-2 my-4" style={{width: '25rem'}}>
                <img className="card-img-top" src={a.counseling_img} alt="Counseling Session" />
                <div className="card-body">
                  <h5 className="card-title">{a.appointment_date}</h5>
                  <p className="card-text">Counseling Title: {a.counseling_name}</p>
                  <p className="card-text">Description: {a.counseling_desc}</p>
                  <p className="card-text">Booked By: {a.user_name}</p>
                  <p className="card-text">Email: {a.user_email}</p>
                  <button type="button" className="btn btn-sm btn-danger" onClick={() => {this.deleteHandler(a.appointment_id, a.user_id)}}>Cancel Appointment</button>
                </div>
              </div>
            );
          }
          )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointment,
  }
}

export default connect(mapStateToProps, { getAllAppointments, deleteAppointment, alert_error })(AllAppointments);