import React from 'react';
import { createAppointment } from '../../actions/appointmentAction';
import { connect } from 'react-redux';


class Book extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { createAppointment } = this.props;
    const  { user_id } = this.props.auth;
    const { sessions } = this.props.session;
    const session = sessions.filter((session) => {
      return session.id === id;
    })
    return (
      <div className='main-bar bar'>
        <p>{id} </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    session: state.session,
  }
}

export default connect(mapStateToProps, { createAppointment})(Book);