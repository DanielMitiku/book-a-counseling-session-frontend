import React from 'react';
import NavBar from './navbar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import SignUp from './signup/Signup'
import Login from './login/Login.js'
import Error from './error/Error';
import Flash from './flash/Flash';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
