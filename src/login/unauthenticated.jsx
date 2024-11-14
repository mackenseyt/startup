import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  // Initialize state with empty string if props.userName is undefined
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    console.log('Login button clicked');
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    console.log('Create button clicked');
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    if (!userName || !password) {
      setDisplayError('Please fill out both fields.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email: userName, password }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userName', userName);
        props.onLogin(userName, data.token);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setDisplayError('An error occurred. Please try again.');
    }
  }
  const logout = () => {
    localStorage.removeItem('userName');
    props.onLogout();
  };


  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='your@email.com'
          />
        </div>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
        </div>
        <Button variant='primary' onClick={loginUser} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={createUser} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
