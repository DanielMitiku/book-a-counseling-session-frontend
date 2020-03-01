import React from 'react';
import NavBar from './navbar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Profile from './home/Profile';
import Appointments from './home/Appointments';
import SignUp from './signup/Signup'
import Login from './login/Login.js'
import Error from './error/Error';
import Flash from './flash/Flash';
import Sidebar from './sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <NavBar />
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-9 offset-2 mt-3'>
          <Flash />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
