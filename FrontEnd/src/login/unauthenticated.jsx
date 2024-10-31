import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './MessageDialog';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export function Unauthenticated({ userName: initialUserName, onLogin }) {
  const [userName, setUserName] = React.useState(initialUserName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (userName === 'testuser' && password === 'password123') {
      localStorage.setItem('userName', userName);
      onLogin(userName);
      navigate('/main');
    } else {
      setDisplayError('Invalid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const InputField = ({ id, label, type, value, onChange }) => (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="form-control"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );

  return (
    <>
      <div className={styles.loginForm}>
        <form onSubmit={handleSubmit} className={styles.loginContainer}>
          <InputField
            id="username"
            label="Username:"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            id="password"
            label="Password:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="primary" type="submit" disabled={!userName || !password}>
            Login
          </Button>
        </form>

        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>.
          </p>
          {/* <p>
            <a href="/dashboard">Skip login and go to the dashboard</a>
          </p> */}
        </div>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
