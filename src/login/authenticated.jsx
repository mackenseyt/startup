import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Authenticated(props) {
  const navigate = useNavigate();

  async function logout() {
    try {
      await fetch(`/api/auth/logout`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      props.onLogout();
      navigate('/login');
    }
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='secondary' onClick={logout}>
        Logout
      </Button>
      {props.children}
    </div>
  );
}