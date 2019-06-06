import React, { useState } from 'react';
import '../../styles.css';
import './Login.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import InputComponent from './../input/InputComponent';
import LoadingSpinner from './../loading-spinner/Loading-Spinner';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const GetToken = () => {
    props.updateLoading(true);
    axios
      .get('http://localhost:20093/api/values', { headers: { 'content-type': 'application/json' } })
      .then(success => HandleSuccess(success))
      .catch(failure => HandleFailure(failure));
  };

  const HandleSuccess = () => {
    props.updateLoggedIn('true');
    props.path.history.push('/dashboard');
    props.updateLoading(false);
  };

  const HandleFailure = () => {
    props.updateLoading(false);
    //set some error message display
  };

  if (props.isLoading) {
    return (
      <div className="content-card login-content-card">
        <div className="login-content-title">Wormwood.io</div>
        <div className="vertical-container login-loading-container">
          <LoadingSpinner loadingText="Loading" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-card login-content-card">
        <div className="login-content-title">Wormwood.io</div>
        <div className="input-container">
          <InputComponent value={username} change={setUsername} placeholder="Username" />
        </div>
        <div className="input-container">
          <InputComponent value={password} password={true} change={setPassword} placeholder="Password" />
        </div>
        <div className="button-container">
          <button className="login-button" onClick={GetToken}>
            Sign In
          </button>
        </div>
      </div>
    );
  }
};

Login.propTypes = {
  updateLoggedIn: PropTypes.func,
  path: PropTypes.shape({
    history: PropTypes.object
  }),
  isLoading: PropTypes.bool,
  updateLoading: PropTypes.func
};

export default Login;
