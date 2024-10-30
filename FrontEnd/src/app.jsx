import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { AuthState } from './login/authState';
// import './app.css';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;