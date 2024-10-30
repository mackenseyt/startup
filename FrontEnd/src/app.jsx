import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

// Ensure each import path matches your structure
// If you have additional components for the "friends" or "games" sections, import them here.

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light min-vh-100 d-flex flex-column'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>Simon<sup>&reg;</sup></div>
            <ul className='navbar-nav d-flex flex-row'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/main'>
                      Main
                    </NavLink>
                  </li>
                  {/* Add other authenticated routes as needed */}
                </>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow-1">
          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                    localStorage.setItem('userName', userName); // Store username in localStorage
                  }}
                />
              }
            />
            <Route path='/main' element={<Main />} />
            {/* Add other routes, like /friends or /games, if you have components for them */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
