import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import './sidebar.css';


const Sidebar = props => {
  const { isAuthenticated, is_privileged } = props.auth;
  const currentUrl = window.location.pathname;

  const logoutHandler = event => {
    event.preventDefault();
    props.logout();
  };

  const loginLink = (
    <ul className="nav flex-column">
      <Link to="/login" className={`side-bar-item py-3  ${currentUrl === '/login' ? 'side-bar-active' : ''}`}>Login</Link>
      <Link to="/signup" className={`side-bar-item py-3 ${currentUrl === '/signup' ? 'side-bar-active' : ''}`}>Sign Up</Link>
    </ul>
  );

  const userLink = (
    <ul className="nav flex-column">
      <Link to="/sessions" className={`side-bar-item py-3 ${currentUrl.includes('/sessions') ? 'side-bar-active' : ''}`}>Book Now</Link>
      <Link to="/appointments" className={`side-bar-item py-3 ${currentUrl === '/appointments' ? 'side-bar-active' : ''}`}>Appointments</Link>
      <Link to="/profile" className={`side-bar-item py-3 ${currentUrl === '/profile' ? 'side-bar-active' : ''}`}>Profile</Link>
      <Link to="/logout" onClick={logoutHandler} className={`side-bar-item py-3 ${currentUrl === '/logout' ? 'side-bar-active' : ''}`}>Logout</Link>
    </ul>
  );

  const adminLink = (
    <ul className="nav flex-column">
      <Link to="/users" className={`side-bar-item py-3 ${currentUrl === '/users' ? 'side-bar-active' : ''}`}>
        Users
        <small className="text-muted" style={{ fontSize: '10px' }}> admin</small>
      </Link>
      <Link to="/all_appointments" className={`side-bar-item py-3 ${currentUrl === '/all_appointments' ? 'side-bar-active' : ''}`}>
        All Booked
        <small className="text-muted" style={{ fontSize: '10px' }}> admin</small>
      </Link>
      <Link to="/counselings" className={`side-bar-item py-3 ${currentUrl === '/counselings' ? 'side-bar-active' : ''}`}>
        Counselings
        <small className="text-muted" style={{ fontSize: '10px' }}> admin</small>
      </Link>
    </ul>
  );

  return (
    <div className="side-bar">
      <div className="side-bar-body text-center">
        <ul className="nav flex-column">
          <Link to="/" className={`side-bar-item py-3 ${currentUrl === '/' ? 'side-bar-active' : ''}`}>Home</Link>
        </ul>
        { is_privileged ? adminLink : '' }
        { isAuthenticated ? userLink : loginLink }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(Sidebar));
