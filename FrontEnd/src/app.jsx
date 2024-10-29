// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './login/login'; // Ensure the import path is correct
import { AuthState } from './login/authState'; // Ensure the import path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                        localStorage.setItem('userName', userName); // Store username in localStorage
                    }}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
