import React from 'react';
import NavBar from './navbar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import SignUp from './signup/SignUp'
import Login from './login/Login.js'
import Error from './error/Error';

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
