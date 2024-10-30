import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './MessageDialog';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './login.module.css'; // Import login-specific styles

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate(); // Initialize navigate hook

  async function loginUser() {
    if (userName === 'testuser' && password === 'password123') {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
      navigate('/main'); // Navigate to main
    } else {
      setDisplayError('Invalid username or password');
    }
  }

  return (
    <>
      {/* Main form container */}
      <div className={styles.loginForm}>
        <form onSubmit={(e) => { e.preventDefault(); loginUser(); }} className={`${styles.loginContainer}`}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit" disabled={!userName || !password}>
            Login
          </Button>
        </form>

        {/* Links below the login form */}
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>.
          </p>
          <p>
            <a href="/dashboard">Skip login and go to the dashboard</a>
          </p>
        </div>
      </div>

      {/* Error Dialog */}
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
