// src/Main.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Form, Alert } from 'react-bootstrap';

function Main() {
    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <header className="bg-dark text-white py-3">
                <div className="container">
                    <h1 className="display-4">Welcome to Game Tracker</h1>
                    <nav className="mt-3">
                        <Button variant="dark" href="/main" className="me-2">Home</Button>
                        <Button variant="light" href="/games" className="me-2">Your Games</Button>
                        <Button variant="light" href="/friends" className="me-2">Friends</Button>
                        <Button variant="light" href="/map" className="me-2">Map</Button>
                    </nav>
                </div>
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
                                <td><Form.Control type="text" placeholder="Enter game name" /></td>
                                <td>
                                    <Form.Select>
                                        <option value="">Select rating</option>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select>
                                        <option value="">Select difficulty</option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Control as="textarea" placeholder="Enter your review here..." />
                                </td>
                                <td className="text-center">
                                    <Button variant="outline-dark">Submit</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Live Social Data Section */}
                <div id="real-time-data" className="mt-5 p-4 bg-white rounded shadow">
                    <h3 className="mb-3">The Game Feed</h3>
                    <p className="text-muted">See what games your friends are playing in real-time:</p>

                    <Alert variant="secondary">
                        <strong>Friend:</strong> John Doe<br />
                        <strong>Game:</strong> Catan<br />
                        <strong>Rating:</strong> 5/5<br />
                        <strong>Difficulty:</strong> Medium<br />
                        <strong>Review:</strong> "Great game, really fun with friends!"<br />
                        <strong>Date Played:</strong> October 8, 2024
                    </Alert>

                    <Alert variant="secondary">
                        <strong>Friend:</strong> Jane Smith<br />
                        <strong>Game:</strong> Ticket to Ride<br />
                        <strong>Rating:</strong> 4/5<br />
                        <strong>Difficulty:</strong> Easy<br />
                        <strong>Review:</strong> "A fun, strategic game!"<br />
                        <strong>Date Played:</strong> October 6, 2024
                    </Alert>
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
