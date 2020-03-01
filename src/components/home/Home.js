import React from 'react';
import Sidebar from './Sidebar';
import Sessions from './Sessions';

class Home  extends React.Component{
  render() {
    return (
      <div className="main">
        <div className='row'>
          <Sidebar />
          <Sessions />
        </div>
      </div>
    );
  }
}

export default Home;
