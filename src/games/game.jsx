import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../main/main.css';

export function Games({ onLogout }) {
    const navigate = useNavigate();
    const [hotGames, setHotGames] = useState([]);

    const logout = () => {
        localStorage.removeItem('userName');
        onLogout();
        navigate('/');
    };

    const goToPage = (path) => navigate(path);
    
    useEffect(() => {
        // Fetch hot games from the backend
        fetch('/api/hotgames')
            .then(response => response.json())
            .then(data => {
                console.log("Hot games data:", data); // Verify data structure
                setHotGames(data); // Directly set hotGames with the returned array
            })
            .catch(error => console.error('Error fetching hot games:', error));
    }, []);

    const Header = () => (
        <header className="main_header">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="display-4">My Played Games</h1>
                <Button variant='light' onClick={logout}>Logout</Button>
            </div>
            <nav className="container mt-3">
                <Button variant="light" onClick={() => goToPage('/main')} className="me-2">Home</Button>
                <Button variant="dark" className="me-2">Your Games</Button>
                <Button variant="light" onClick={() => goToPage('/friends')} className="me-2">Friends</Button>
                <Button variant="light" onClick={() => goToPage('/map')} className="me-2">Map</Button>
            </nav>
        </header>
    );

    const Footer = () => (
        <footer className="text-center mt-5">
            <p>
                <a href="https://github.com/mackenseyt/startup">Mackensey Thomason Startup Repo</a>
            </p>
        </footer>
    );

    return (
        <div className="bg-light d-flex flex-column min-vh-100">
            <Header />
            <main className="container my-4 flex-grow-1">
                <h2 className="mb-4">Game History</h2>
                <Accordion id="gameAccordion">
                    {[1, 2].map((game, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>Example Game {game}</Accordion.Header>
                            <Accordion.Body>
                                Details about Example Game {game}.
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                {/* Hot Games Section */}
                <section className="mt-5">
                    <h2 className="mb-4">Trending Board Games</h2>
                    {hotGames.length > 0 ? (
                        <Accordion id="hotGamesAccordion">
                            {hotGames.map((game, index) => (
                                <Accordion.Item eventKey={index.toString()} key={game.id}>
                                    <Accordion.Header>{game.name} ({game.yearPublished})</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Rank: {game.rank}</p>
                                        {game.thumbnail && (
                                            <img src={game.thumbnail} alt={`${game.name} thumbnail`} />
                                        )}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    ) : (
                        <p>Loading hot games...</p>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Games;
