import React from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignUp from './signup/SignUp'
import Login from './login/Login.js'
import Error from './Error';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
