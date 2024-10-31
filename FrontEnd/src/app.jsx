import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { Games } from './games/game'; // Import the Games component
import { AuthState } from './login/authState';
import {Friends} from './friends/friends'
import {Map} from './map/map'

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(loginUserName, newAuthState) => {
                setAuthState(newAuthState);
                setUserName(loginUserName);
                if (newAuthState === AuthState.Authenticated) {
                  localStorage.setItem('userName', loginUserName);
                } else {
                  localStorage.removeItem('userName');
                }
              }}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              onLogout={() => {
                setAuthState(AuthState.Unauthenticated);
                setUserName('');
              }}
            />
          }
        />
        <Route
          path="/games"
          element={
            <Games
            onLogout={() => {
              setAuthState(AuthState.Unauthenticated);
              setUserName('');
            }}
             /> // Render the Games component when the /games path is accessed
          }
        />
        <Route
          path="/friends"
          element={
            <Friends
            onLogout={() => {
              setAuthState(AuthState.Unauthenticated);
              setUserName('');
            }}
             /> // Render the Friends component when the /friends path is accessed
          }
        />
        <Route
          path="/map"
          element={
            <Map
            onLogout={() => {
              setAuthState(AuthState.Unauthenticated);
              setUserName('');
            }}
             /> // Render the Map component when the /map path is accessed
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
