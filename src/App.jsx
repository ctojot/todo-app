import React from 'react';
import SettingsProvider from './Context/Settings/index';
import Todo from './Components/Todo';
import LoginContext from './Context/Auth/index'
import Header from './Components/Header/index';
import Login from './Components/Login'
import Auth from './Components/Auth'

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsProvider>
          <LoginContext>
            <Header>
            <Login />
            </Header>
            <Auth>
              <div>Any valid user can see this</div>
            </Auth>

            <Auth capability="create">
              <div>Users with create access can see this</div>
            </Auth>

            <Auth capability="update">
              <div>Users with update access can see this</div>
            </Auth>

            <Auth capability="delete">
              <div>Users with delete access can see this</div>
            </Auth>
            <Todo />
          </LoginContext>
        </SettingsProvider>
      </>
    );
  }
}