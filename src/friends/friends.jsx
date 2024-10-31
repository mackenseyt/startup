// src/Friends.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../main/main.css';

export function Friends({ onLogout }) {
    const navigate = useNavigate();
    const [selectedFriend, setSelectedFriend] = useState(null);

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
                    <h1 className="display-4">Friends List</h1>
                    <Button variant='light' onClick={logout}>
                        Logout
                    </Button>
                </div>
                <nav className="container mt-3">
                    <Button variant="light" onClick={() => goToPage('/main')} className="me-2">Home</Button>
                    <Button variant="light" onClick={() => goToPage('/games')} className="me-2">Your Games</Button>
                    <Button variant="dark" className="me-2">Friends</Button>
                    <Button variant="light" onClick={() => goToPage('/map')} className="me-2">Map</Button>
                </nav>
            </header>

            <main className="container my-4 flex-grow-1">
                <h2>Your Friends</h2>
                <p className="lead">Click on a friend to display their information</p>
                <ListGroup id="friend-list" className="mb-4">
                    {/* List of current Friends */}
                    <ListGroup.Item action onClick={() => setSelectedFriend('Details about Friend 1')}>Friend 1</ListGroup.Item>
                    <ListGroup.Item action onClick={() => setSelectedFriend('Details about Friend 2')}>Friend 2</ListGroup.Item>
                    <ListGroup.Item action onClick={() => setSelectedFriend('Details about Friend 3')}>Friend 3</ListGroup.Item>
                </ListGroup>

                {selectedFriend && (
                    <Alert variant="info" className="mt-3">
                        {selectedFriend}
                    </Alert>
                )}

                <h2>Find New Friends</h2>
                <div className="input-group mb-3">
                    <input type="text" id="search" className="form-control" placeholder="Search for Friends..." />
                    <Button variant="primary" onClick={() => alert('Search functionality not yet implemented')}>Search</Button>
                </div>

                {/* Placeholder for search results */}
                <ListGroup id="search-results">
                    {/* Search results will be appended here dynamically */}
                </ListGroup>
            </main>

            <footer className="text-center mt-5">
                <p>
                    <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
                </p>
            </footer>
        </div>
    );
}

export default Friends;
