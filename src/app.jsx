import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { Games } from './games/game';
import { Friends } from './friends/friends';
import { Map } from './map/map';
import { AuthState } from './login/authState';
import { Unauthenticated } from './login/unauthenticated';

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

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setAuthState(AuthState.Unauthenticated);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authState === AuthState.Authenticated ? <Navigate to="/main" /> : <Login onAuthChange={handleAuthChange} />} />
        <Route path="/main" element={authState === AuthState.Authenticated ? <Main onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/games" element={authState === AuthState.Authenticated ? <Games onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/friends" element={authState === AuthState.Authenticated ? <Friends onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/map" element={authState === AuthState.Authenticated ? <Map onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/unauthenticated" element={<Unauthenticated onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
