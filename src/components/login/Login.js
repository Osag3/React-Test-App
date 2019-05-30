import React, { useState } from 'react';
import '../../styles.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const GetToken = () => {
    // eslint-disable-next-line no-console
    console.log(username, password);
  };

  return (
    <div className="content-card login-content-card">
      <input placeholder="Username" value={username} className="username-input" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" value={password} type="password" className="password-input" onChange={e => setPassword(e.target.value)} />
      <button onClick={GetToken}>Sign In</button>
    </div>
  );
};

export default Login;
