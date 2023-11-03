import React from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Login';

function Login(props) {
  const context = React.useContext(LoginContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
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
