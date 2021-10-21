import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Userinfo from './pages/userinfo';

const App = () => (
  <Router>
    <ul>
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="/userinfo">userinfo</Link></li>
    </ul>
    <Switch>
      <Route path="/dashboard"><Dashboard /></Route>
      <Route path="/userinfo"><Userinfo /></Route>
    </Switch>
  </Router>

);

export default App;
