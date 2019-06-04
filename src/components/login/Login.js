import React, { useState } from 'react';
import '../../styles.css';
import './Login.css';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const GetToken = () => {
    // eslint-disable-next-line no-console
    console.log(username, password);
    axios.get('http://localhost:58038/api/values', {headers: { 'content-type': 'application/json'}})
    .then(success => HandleSuccess(success))
    .catch(failure => HandleFailure(failure))
  }

  const HandleSuccess = success => {
    // eslint-disable-next-line no-console
    console.log(success);
    props.updateLoggedIn('true');
    props.path.history.push('/dashboard');
  }

  const HandleFailure = failure => {
    // eslint-disable-next-line no-console
    console.log(failure);
  }

  return (
    <div className="content-card login-content-card">
      <input placeholder="Username" value={username} className="username-input" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" value={password} type="password" className="password-input" onChange={e => setPassword(e.target.value)} />
      <button onClick={GetToken}>Sign In</button>
    </div>
  );
};

Login.propTypes = {
  updateLoggedIn: PropTypes.func,
  path: PropTypes.shape({
    history: PropTypes.object
  })
}

export default Login;
