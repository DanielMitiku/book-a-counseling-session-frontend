import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';


const Sidebar = (props) => {
  const { isAuthenticated } = props.auth;
  
  const logoutHandler = (event) => {
    event.preventDefault();
    props.logout();
  }

  const loginLink = (
    <ul className="nav flex-column">
        <Link to='/login' className="side-bar-item py-3 px-5">Login</Link>
        <Link to='/signup' className="side-bar-item py-3 px-5">Sign Up</Link>
    </ul>
  );

  const userLink = (
      <ul className="nav flex-column">
        <Link to='/appointments' className="side-bar-item py-3 px-5">Appointments</Link>
        <Link to='/profile' className="side-bar-item py-3 px-5">Profile</Link>
        <Link to='/logout' onClick={logoutHandler} className="side-bar-item py-3 px-5">Logout</Link>
      </ul>
  );

  return (
    <div className='side-bar'>
      <div className="side-bar-body text-left">
        <ul className="nav flex-column">
          <Link to='/' className="side-bar-item py-3 px-5 side-bar-active">Home</Link>
        </ul>
        { isAuthenticated ? userLink : loginLink }
      </div>    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { logout })(withRouter(Sidebar));