// src/Games.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../main/main.css';

export function Games({ onLogout }) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        onLogout();
        navigate('/');
    }

    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <header className="main_header">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-4">My Played Games</h1>
                    <Button variant='light' onClick={logout}>
                        Logout
                    </Button>
                </div>
                <nav className="container mt-3">
                    <Button variant="light" onClick={() => navigate('/main')} className="me-2">Home</Button>
                    <Button variant="dark" className="me-2">Your Games</Button>
                    <Button variant="light" onClick={() => navigate('/friends')} className="me-2">Friends</Button>
                    <Button variant="light" onClick={() => navigate('/map')} className="me-2">Map</Button>
                </nav>
            </header>

            <main className="container my-4 flex-grow-1">
                <h2 className="mb-4">Game History</h2>
                <Accordion id="gameAccordion">
                    {/* Example Game 1 */}
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Example Game 1</Accordion.Header>
                        <Accordion.Body>
                            Details about Example Game 1.
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* Example Game 2 */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Example Game 2</Accordion.Header>
                        <Accordion.Body>
                            Details about Example Game 2.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </main>

            <footer className="text-center mt-5">
                <p>
                    <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
                </p>
            </footer>
        </div>
    );
}

export default Games;
