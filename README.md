# Startup

### Resources
- [Notes](./notes.md): Important notes for the project.
- [Server Access](http://54.82.53.184/): Link to the live server.

# Board Game Tracker

## Elevator Pitch
Are you a board game enthusiast? Our platform allows users to track all the games they play, share reviews, rate difficulty, and connect with friends to compare experiences. Whether you're exploring new games or reflecting on past favorites, this app lets you see who played what, where they played, and what they thought, all in one place. A personalized hub for game night memories!

## Key Features
- **Game Tracking**: Users can log the board games or card games they’ve played, rating each on difficulty and enjoyment.
- **Review and Rating**: Players can write reviews, rate the game, and add personal notes about the experience.
- **Friend Connection**: Users can connect with friends to see which games they’ve played, where they played, and how they rated them.
- **Map Integration**: Shows the location of where games were played.


## Technologies
I will use the required technologies in the following ways:

- **HTML**: Uses correct HTML structure for application pages, including the login page, game logging form, and friend feed.
  
- **CSS**: Application styling that ensures good use of whitespace, clear typography, and responsive design for different screen sizes.
  
- **React**: Provides a reactive, single-page application with components for logging games, viewing friend feeds, and user interactions. React Router will manage routing between different views.
  
- **Service**: Backend service with endpoints for:
  - Logging games and reviews
  - Fetching friends' game history
  - Retrieving external game data from the BoardGameGeek API
  - Retrieving locations where games were played

- **DB/Login**: Store users, games, reviews, and friend connections in a database. Register and login users securely with password encryption. Users must be authenticated to track games and access their friends' data.

- **WebSocket**: Real-time updates on the friend feed when a friend logs a new game or posts a review. This will ensure the social feed is updated instantly as users interact with the platform.

## Design
[Login Page Sketch](./Pictures/login.jpeg)
[Game Logging Page Sketch](./Pictures/mainPage.jpeg)
[Your Games Page Sketch](./Pictures/yourGames.jpeg)
[Map Page Sketch](./Pictures//map.jpeg)

### Key Information
The server keys are stored in `260server.pem`. Ensure that the file is kept secure and only accessible with proper permissions.

### Additional Instructions
Make sure to run the following command to set correct permissions for the key file before SSH:
```bash
 chmod 600 260server.pem
```

