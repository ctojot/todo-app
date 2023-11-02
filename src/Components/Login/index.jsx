import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from './context.js';

function Login() {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(username, password);
  };

  return (
    <>
      <When condition={context.loggedIn}>
        <button onClick={context.logout}>Log Out</button>
      </When>

      <When condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </When>
    </>
  );
}

export default Login;
