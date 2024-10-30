import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './MessageDialog';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
      <div className="container">
        <header className="text-center my-5">
          <h1 className="display-4">Login to Game Tracker</h1>
        </header>

        <main className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => { e.preventDefault(); loginUser(); }} className="p-4 bg-white rounded shadow">
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
              <Button variant="primary" onClick={loginUser} disabled={!userName || !password}>
                Login
              </Button>
            </form>

            <p className="text-center mt-3">
              Don't have an account? <a href="/signup">Sign up here</a>.
            </p>
            <p className="text-center">
              <a href="/dashboard">Skip login and go to the dashboard</a>
            </p>
          </div>
        </main>

        <footer className="text-center mt-5">
          <p>
            <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
          </p>
        </footer>

        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
      </div>
    </>
  );
}
