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

  return (
    <main className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <header className={styles.textCenterLogin}>
          <h1>Login to Game Tracker</h1>
        </header>
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated);
          }}
        />
        <footer className={styles.loginFooter}>
          <p>
            <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
