import React from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Auth/index';

function Login(props) {
  const context = React.useContext(LoginContext);

  const isLoggedIn = context.loggedIn;
  const canDo = props.capability ? context.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  );
}

export default Login;
