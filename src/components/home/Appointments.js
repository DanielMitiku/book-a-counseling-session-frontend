import React from 'react';
import { connect } from 'react-redux';
import { getAppointments } from '../../actions/appointmentAction';

class Appointments extends React.Component {
  componentDidMount() {
    const  { user_id } = this.props.auth;
    const { getAppointments } = this.props;
    getAppointments(user_id);
  }

  render() {
    const { appointment } = this.props;
    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>Here are your Appointments</h3>
        <div className='row'>
        { appointment.appointments && appointment.appointments.map(a => {
          return (
            <div key={a.id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
              <div className="card-body">
                <h5 className="card-title">{a.date}</h5>
                <p className="card-text">{a.date}</p>
              </div>
            </div>
          );
        }
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointment: state.appointment,
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { getAppointments })(Appointments);