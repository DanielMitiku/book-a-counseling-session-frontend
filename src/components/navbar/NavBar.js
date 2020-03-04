import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authAction';
import './navbar.css';


const NavBar = (props) => {
  const { isAuthenticated } = props.auth;
  const logoutHandler = (event) => {
    event.preventDefault();
    props.logout();
  }
  const loginLink = (
      <ul className="nav">
        <li className="nav-item align-right">
          <Link to='/login' className="nav-link nav-color">Login</Link>
        </li>
        <li className="nav-item align-right">
          <Link to='signup' className="nav-link nav-color">Sign Up</Link>
        </li>
      </ul>
  );
  const logoutLink = (
      <ul className="nav">
        <li className="nav-item align-right">
          <Link to='/logout' onClick={logoutHandler} className="nav-link nav-color">Logout</Link>
        </li>
      </ul>
  );

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <li className="nav-item">
        <Link to='/' className="navbar-brand">Book a Session</Link>
      </li>
      { isAuthenticated ? logoutLink : loginLink }      
    </nav>

  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { logout })(withRouter(NavBar));