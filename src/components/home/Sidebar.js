import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
  render() {
    return (
      <div className='col-md-2 side-bar'>
        <ul class="nav flex-column">
            <Link to='/' className="side-bar-item py-2 side-bar-active">Home</Link>
            <Link to='/appointments' className="side-bar-item py-2">Appointments</Link>
            <Link to='/profile' className="side-bar-item py-2">Profile</Link>
          </ul>
      </div>
    );
  }
}

export default Sidebar;