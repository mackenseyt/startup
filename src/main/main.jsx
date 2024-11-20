import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './main.css';

export function Main({ onLogout }) {
    const navigate = useNavigate();
    const [gameId, setGameId] = useState('');
    const [rating, setRating] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [review, setReview] = useState('');

    function goToPage(path) {
        navigate(path);
    }

    const handleRatingSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/rate-game', { gameId, rating, difficulty, review });
            alert('Rating submitted successfully');
            setGameId('');
            setRating('');
            setDifficulty('');
            setReview('');
        } catch (error) {
            console.error('Error submitting rating:', error);
            alert('Failed to submit rating');
        }
    };

    const NavigationButton = ({ path, label, variant }) => (
        <Button variant={variant} onClick={() => goToPage(path)} className="me-2">
            {label}
        </Button>
    );

    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <header className="main_header">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="display-4">Welcome to Game Tracker</h1>
                    <Button variant='light' onClick={onLogout}>
                        Logout
                    </Button>
                </div>
                <nav className="container mt-3">
                    <NavigationButton path="/main" label="Home" variant="dark" />
                    <NavigationButton path="/games" label="Your Games" variant="light" />
                    <NavigationButton path="/friends" label="Friends" variant="light" />
                    <NavigationButton path="/map" label="Map" variant="light" />
                </nav>
            </header>

            <main className="container my-4 flex-grow-1">
                <h2 className="mb-4">Enter a Rating!</h2>

                <div className="table-responsive">
                    <Table striped bordered>
                        <thead className="table-dark">
                            <tr>
                                <th>Game</th>
                                <th>Rating</th>
                                <th>Difficulty</th>
                                <th>Reviews</th>
                                <th></th> {/* Empty header for button column */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Control type="text" placeholder="Enter game name" value={gameId} onChange={(e) => setGameId(e.target.value)} required /></td>
                                <td>
                                    <Form.Select value={rating} onChange={(e) => setRating(e.target.value)} required>
                                        <option value="">Select rating</option>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
                                        <option value="">Select difficulty</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Control as="textarea" placeholder="Enter your review here..." value={review} onChange={(e) => setReview(e.target.value)} required />
                                </td>
                                <td className="text-center">
                                    <Button variant="outline-dark" onClick={handleRatingSubmit}>Submit</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Live Social Data Section */}
                <div id="real-time-data" className="mt-5 p-4 bg-white rounded shadow">
                    <h3 className="mb-3">The Game Feed</h3>
                    <p className="text-muted">See what games your friends are playing in real-time:</p>

                    {[
                        {
                            friend: 'John Doe',
                            game: 'Catan',
                            rating: '5/5',
                            difficulty: 'Medium',
                            review: 'Great game, really fun with friends!',
                            date: 'October 8, 2024'
                        },
                        {
                            friend: 'Jane Smith',
                            game: 'Ticket to Ride',
                            rating: '4/5',
                            difficulty: 'Easy',
                            review: 'A fun, strategic game!',
                            date: 'October 6, 2024'
                        }
                    ].map((entry, index) => (
                        <Alert key={index} variant="secondary">
                            <strong>Friend:</strong> {entry.friend}<br />
                            <strong>Game:</strong> {entry.game}<br />
                            <strong>Rating:</strong> {entry.rating}<br />
                            <strong>Difficulty:</strong> {entry.difficulty}<br />
                            <strong>Review:</strong> "{entry.review}"<br />
                            <strong>Date Played:</strong> {entry.date}
                        </Alert>
                    ))}
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

export default Main;
