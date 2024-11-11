import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export function Login({ userName, authState, onAuthChange }) {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (authState === AuthState.Authenticated) {
      navigate('/main');
    }
  }, [authState, navigate]);

  // Updated handleLogin to call the backend API
  const handleLogin = (loginUserName, password) => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: loginUserName, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed. Please check your credentials.');
        }
        return response.json();
      })
      .then(data => {
        onAuthChange(loginUserName, AuthState.Authenticated);
        localStorage.setItem('authToken', data.token); // Store token if needed for other requests
        setError(null);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const Header = () => (
    <header className={styles.textCenterLogin}>
      <h1>Login to Game Tracker</h1>
    </header>
  );

  const Footer = () => (
    <footer className={styles.loginFooter}>
      <p>
        <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
      </p>
    </footer>
  );

  return (
    <main className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <Header />
        {error && <p className={styles.error}>{error}</p>}
        <Unauthenticated userName={userName} onLogin={(username, password) => handleLogin(username, password)} />
        <Footer />
      </div>
    </main>
  );
}
