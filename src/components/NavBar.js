import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <li className="nav-item">
        <a className="navbar-brand" href="#">Book a Session</a>
      </li>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Link</a>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item align-right">
          <a className="nav-link text-secondary" href="#">Login</a>
        </li>
        <li className="nav-item align-right">
          <a className="nav-link text-secondary" href="#">Sign Up</a>
        </li>
      </ul>
    </nav>

  )
};

export default NavBar;