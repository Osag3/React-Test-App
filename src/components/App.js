import React, {useState} from 'react';
import Login from './login/Login';
import '../styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './not-found/Not-Found';
import Dashboard from './dashboard/Dashboard';
import NavBar from './nav-bar/Nav-Bar';
 
const App = () => {
  const [loggedIn, setLoggedIn] = useState('false');
  const LoginComponent = (match) => {
    return (
      <div className="vertical-container">
        <Login updateLoggedIn={setLoggedIn} path={match}/>
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
    <div className="vertical-container">
    <Dashboard />
  </div>);
  };

  return (
    <Router>
      <NavBar showNavBar={loggedIn} />
      <div>Logged in ? {loggedIn}</div>
      <Switch>
        <Route exact path="/dashboard" component={DashboardComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route component={EmptyComponent} />
      </Switch>
    </Router>
  );
};

export default App;
