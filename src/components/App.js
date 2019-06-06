import React, { useState } from 'react';
import Login from './login/Login';
import '../styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './not-found/Not-Found';
import Dashboard from './dashboard/Dashboard';
import NavBar from './nav-bar/Nav-Bar';
import Shapes from './shapes/Shapes';

const App = () => {
  const [loggedIn, setLoggedIn] = useState('false');
  const [isLoading, setIsLoading] = useState(false);

  const LoginComponent = match => {
    return (
      <div className="vertical-container">
        <Login updateLoggedIn={setLoggedIn} path={match} isLoading={isLoading} updateLoading={setIsLoading} />
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

  const DashboardComponent = () => {
    return (
      <div>
        <Dashboard />
      </div>
    );
  };

  const ShapesComponent = () => {
    return <Shapes />;
  };

  return (
    <Router>
      <NavBar showNavBar={loggedIn} />
      <div>Logged in ? {loggedIn}</div>
      <Switch>
        <Route exact path="/dashboard" component={DashboardComponent} />
        <Route exact path="/shapes" component={ShapesComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route component={EmptyComponent} />
      </Switch>
    </Router>
  );
};

export default App;
