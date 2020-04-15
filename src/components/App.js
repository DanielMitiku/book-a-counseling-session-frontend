import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Home from './home/Home';
import Profile from './home/Profile';
import Appointments from './home/Appointments';
import AllAppointments from './home/AllAppointments';
import Sessions from './home/Sessions';
import SignUp from './signup/Signup';
import Login from './login/Login.js';
import Error from './error/Error';
import Flash from './flash/Flash';
import Sidebar from './sidebar/Sidebar';
import Book from './home/Book';
import Counselings from './home/Counselings';
import Users from './home/Users';
import CheckAuth from '../utils/check_auth';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <NavBar />
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 col-12 mt-3">
          <Flash />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appointments" component={CheckAuth(Appointments)} />
            <Route path="/all_appointments" component={CheckAuth(AllAppointments)} />
            <Route path="/profile" component={CheckAuth(Profile)} />
            <Route path="/sessions/:id" component={CheckAuth(Book)} />
            <Route path="/sessions" component={CheckAuth(Sessions)} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/counselings" component={CheckAuth(Counselings)} />
            <Route path="/users" component={CheckAuth(Users)} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
