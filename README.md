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

# HTML deliverable

- **HTML Pages**: 
  - **Login Page (`index.html`)**: Allows users to input their username and password to log in. Once authenticated, the user is redirected to the main dashboard. (authentication doesn't work yet so I added a link to send you to the main page anyways)
  - **Main Dashboard (`main.html`)**: Displays navigation options for tracking games, viewing a map of played games, and viewing their current friends. As well as a table that they will fill out with their game rating information.
  - **Games Page (`game.html`)**: Displays all the games they have rated.
  - **Map Page (`map.html`)**: will display a map with tags of all the places they have played games as well as where their friends have played games.
  - **Friends Page (`friends.html`)**: Displays all of their friends and lets them connect with new friends.

- **Navigation Links**: 
  - The login page automatically redirects to the main dashboard after a successful login. 
  - The main dashboard includes links to the games list, map, and profile pages for easy navigation.
  - The other pages also link to eachother and back to the main dashboard.

- **Textual Descriptions**: 
  - Each page includes clear textual descriptions and placeholders for future features such as user data, game lists, and real-time updates.

- **Placeholder for Database Data**: 
  - In the future, the app will pull data from the database, such as user profiles, game records, and game details.

- **Real-Time WebSocket Data**: 
  - The main dashboard contains a placeholder for real-time data, which will display updates from the server (such as game results or user interactions) via WebSockets.

## Missing Features

- **Images**: 
  - At the moment, there are no images included. This is a placeholder for future visual elements like game covers or user avatars.
  
# CSS deliverable



### Additional Instructions
Make sure to run the following command to set correct permissions for the key file before SSH:
```bash
 chmod 600 260server.pem
```

