import React from 'react';
import Login from './login/Login';
import '../styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './not-found/Not-Found';

const LoginComponent = () => {
  return (
    <div className="vertical-container">
      <Login />
    </div>
  );
};

const EmptyComponent = () => {
  return (
    <div className="vertical-container">
      <NotFound />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route component={EmptyComponent} />
      </Switch>
    </Router>
  );
};

export default App;
