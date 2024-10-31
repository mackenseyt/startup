// src/Map.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../main/main.css';

export function Map({ onLogout }) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        onLogout();
        navigate('/');
    }

    function goToPage(path) {
        navigate(path);
    }

    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <header className="main_header">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-4">Find Games Played</h1>
                    <Button variant='light' onClick={logout}>
                        Logout
                    </Button>
                </div>
                <nav className="container mt-3">
                    <Button variant="light" onClick={() => goToPage('/main')} className="me-2">Home</Button>
                    <Button variant="light" onClick={() => goToPage('/games')} className="me-2">Your Games</Button>
                    <Button variant="light" onClick={() => goToPage('/friends')} className="me-2">Friends</Button>
                    <Button variant="dark" className="me-2">Map</Button>
                </nav>
            </header>

            <main className="container my-4 flex-grow-1">
                <h2>Explore nearby games</h2>
                <div id="map" className="border rounded p-3 bg-white" style={{ height: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
                    {/* Placeholder for a map widget */}
                    <p className="text-muted">Map loading...</p>
                </div>
            </main>

            <footer className="text-center mt-5">
                <p>
                    <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
                </p>
            </footer>
        </div>
    );
}

export default Map;
