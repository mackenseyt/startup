// src/Map.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../main/main.css';

export function Map({ onLogout }) {
    const navigate = useNavigate();
    const [quote, setQuote] = useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = useState('unknown');

    useEffect(() => {
        fetch('https://quote.cs260.click')
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.quote);
                setQuoteAuthor(data.author);
            })
            .catch((error) => {
                console.error('Error fetching quote:', error);
            });
    }, []);

    function handleLogout() {
        localStorage.removeItem('userName');
        onLogout();
        navigate('/');
    }

    function navigateTo(path) {
        navigate(path);
    }

    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <header className="main_header">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-4">Find Games Played</h1>
                    <Button variant="light" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
                <nav className="container mt-3">
                    {['/main', '/games', '/friends', '/map'].map((path, index) => (
                        <Button
                            key={index}
                            variant={path === '/map' ? 'dark' : 'light'}
                            onClick={() => navigateTo(path)}
                            className="me-2"
                        >
                            {path === '/main' ? 'Home' : path.substring(1).replace(/^\w/, c => c.toUpperCase())}
                        </Button>
                    ))}
                </nav>
            </header>

            <main className="container my-4 flex-grow-1">
                <div className="quote-box text-center mt-4">
                    <p className="quote" style={{ fontFamily: 'Pacifico, cursive', fontSize: '24px' }}>{quote}</p>
                    <p className="author" style={{ fontStyle: 'italic' }}>- {quoteAuthor}</p>
                </div>
                <h2>Explore nearby games</h2>
                <div
                    id="map"
                    className="border rounded p-3 bg-white"
                    style={{ height: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}
                >
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
