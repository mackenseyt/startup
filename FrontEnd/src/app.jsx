import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { Games } from './games/game';
import { Friends } from './friends/friends';
import { Map } from './map/map';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = React.useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);

  const handleAuthChange = (loginUserName, newAuthState) => {
    setAuthState(newAuthState);
    setUserName(loginUserName);
    if (newAuthState === AuthState.Authenticated) {
      localStorage.setItem('userName', loginUserName);
    } else {
      localStorage.removeItem('userName');
    }
  };

  const onLogout = () => {
    setAuthState(AuthState.Unauthenticated);
    setUserName('');
    localStorage.removeItem('userName');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={handleAuthChange}
            />
          }
        />
        <Route path="/main" element={<Main onLogout={onLogout} />} />
        <Route path="/games" element={<Games onLogout={onLogout} />} />
        <Route path="/friends" element={<Friends onLogout={onLogout} />} />
        <Route path="/map" element={<Map onLogout={onLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
