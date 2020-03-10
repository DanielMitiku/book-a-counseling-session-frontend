import React from 'react';
import { connect } from 'react-redux';
import { getAppointments, deleteAppointment } from '../../actions/appointmentAction';
import jwtDecode from 'jwt-decode';


class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    if(localStorage.jwtToken) {
      const user_id  = jwtDecode(localStorage.jwtToken).user_id;
      const { getAppointments } = this.props;
      getAppointments(user_id);
    }
  }

  deleteHandler = (appointment_id) => {
    const user_id  = jwtDecode(localStorage.jwtToken).user_id;
    const { deleteAppointment } = this.props;
    deleteAppointment(appointment_id, user_id);
  }

  render() {
    const { appointment } = this.props;
    const loading = (<div className="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                       <span className="sr-only">Loading...</span>
                      </div>
                    </div>);
    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>Here are your Appointments</h3>
        {appointment.requesting && loading}
        { appointment.appointments && appointment.appointments.length === 0 ? <div className="text-center mt-5"> No Appointment booked </div> : (
          <div className='row'>
          { appointment.appointments && appointment.appointments.map(a => {
            return (
              <div key={a.appointment_id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{a.appointment_date}</h5>
                  <p className="card-text">Counseling Title: {a.counseling_name}</p>
                  <p className="card-text">Description: {a.counseling_desc}</p>
                  <button type="button" className="btn btn-sm btn-danger" onClick={() => {this.deleteHandler(a.appointment_id)}}>Cancel Appointment</button>
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

export default connect(mapStateToProps, { getAppointments, deleteAppointment })(Appointments);