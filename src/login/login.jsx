import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export function Login({ userName, authState, onAuthChange }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authState === AuthState.Authenticated) {
      navigate('/main');
    }
  }, [authState, navigate]);

  const handleLogin = (loginUserName) => {
    onAuthChange(loginUserName, AuthState.Authenticated);
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
        <Unauthenticated userName={userName} onLogin={handleLogin} />
        <Footer />
      </div>
    </main>
  );
}
