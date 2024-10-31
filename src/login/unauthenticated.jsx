import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  // Initialize state with empty string if props.userName is undefined
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    if (!userName || !password) {
      setDisplayError('Please fill out both fields.');
      return;
    }
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    if (!userName || !password) {
      setDisplayError('Please fill out both fields.');
      return;
    }
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="password"
            value={password} // Controlled value
            onChange={(e) => setPassword(e.target.value)} // Updates state with each keystroke
            placeholder="password"
          />
        </div>
        <Button variant="primary" onClick={loginUser} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant="secondary" onClick={createUser} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
