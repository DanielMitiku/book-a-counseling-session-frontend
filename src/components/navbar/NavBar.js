import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <li className="nav-item">
        <Link to='/' className="navbar-brand">Book a Session</Link>
      </li>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to='/' className="nav-link active nav-color">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link nav-color">Link</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link nav-color">Link</Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item align-right">
          <Link to='/login' className="nav-link nav-color">Login</Link>
        </li>
        <li className="nav-item align-right">
          <Link to='signup' className="nav-link nav-color">Sign Up</Link>
        </li>
      </ul>
    </nav>

  )
};

export default NavBar;