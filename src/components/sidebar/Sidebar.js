import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import './sidebar.css';


const Sidebar = (props) => {
  const { isAuthenticated, is_privileged } = props.auth;
  const currentUrl = window.location.pathname;

  const logoutHandler = (event) => {
    event.preventDefault();
    props.logout();
  }

  const loginLink = (
    <ul className="nav flex-column">
        <Link to='/login' className={`side-bar-item py-3 px-5 ${currentUrl === '/login' ? "side-bar-active" : ""}`}>Login</Link>
        <Link to='/signup' className={`side-bar-item py-3 px-5 ${currentUrl === '/signup' ? "side-bar-active" : ""}`}>Sign Up</Link>
    </ul>
  );

  const userLink = (
      <ul className="nav flex-column">
        <Link to='/sessions' className={`side-bar-item py-3 px-5 ${currentUrl.includes('/sessions') ? "side-bar-active" : ""}`}>Book Now</Link>
        <Link to='/appointments' className={`side-bar-item py-3 px-5 ${currentUrl === '/appointments' ? "side-bar-active" : ""}`}>Appointments</Link>
        <Link to='/profile' className={`side-bar-item py-3 px-5 ${currentUrl === '/profile' ? "side-bar-active" : ""}`}>Profile</Link>
        <Link to='/logout' onClick={logoutHandler} className={`side-bar-item py-3 px-5 ${currentUrl === '/logout' ? "side-bar-active" : ""}`}>Logout</Link>
      </ul>
  );

  const adminLink = (
    <ul className="nav flex-column">
        <Link to='/users' className={`side-bar-item py-3 px-5 ${currentUrl === '/users' ? "side-bar-active" : ""}`}>Users</Link>
        <Link to='/counselings' className={`side-bar-item py-3 px-5 ${currentUrl === '/counselings' ? "side-bar-active" : ""}`}>Counselings</Link>
    </ul>
  );

  return (
    <div className='side-bar'>
      <div className="side-bar-body text-left">
        <ul className="nav flex-column">
          <Link to='/' className={`side-bar-item py-3 px-5 ${currentUrl === '/' ? "side-bar-active" : ""}`}>Home</Link>
        </ul>
        { is_privileged ? adminLink : '' }
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