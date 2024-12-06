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
- Header, Footer, and Main Content: Consistently styled with a unified color scheme and typography for a polished look.
- Navigation Elements: Improved aesthetics by removing underlines and adjusting colors for better visual, buttons are ourlined for clarity.
- Responsive Design: The application is fully responsive, adapting to different screen sizes and devices.
- Application Elements: Utilized effective contrast and whitespace to enhance readability and user interaction.
- Consistent Text Styling: Applied uniform fonts across all text content to maintain consistency.
- Image Handling: There are images as the header of each page. Centered and filling the entire header.

# React Deliverable
For this deliverable, I used JavaScript and React to create a fully functional, single-page application for the Board Game Tracker app, allowing seamless navigation and interaction for a single user. I also set up placeholders for upcoming features.
- Bundled and Transpiled - Completed using Vite for streamlined project setup and fast, optimized builds.
- Components - Built modular React components for Login, Main Dashboard, Games, Friends, and Map, enhancing code reusability and consistency across the application.
- Login - Users can enter their credentials, which upon authentication, redirects them to the main dashboard.
- Games Page - Displays user game history, including ratings, difficulty, and reviews. Ready for database integration to manage this data dynamically.
- Friends Page - Lists friends with the ability to click on any friend to see more details inline, offering an interactive experience.
- Map Page - Contains a placeholder map widget, reserved for future location-based features.
- Routing - Implemented React Router for smooth transitions between login, games, friends, and map pages without full-page reloads.
- Styling - Replaced global CSS with module-specific styles, resolving potential style conflicts for a cleaner, more organized setup.
- Deployment - Application deployed on startup.trackyourboardgames.com using a deployment script. Regular commits were pushed to GitHub.
### Next Steps
- Database - Integrate backend services to handle and persist user, game, and friend data.
- WebSocket - Incorporate WebSocket for real-time updates on friends’ activities and game logs.
- UI Enhancements - Improve visual design by adding more graphical elements to enrich user experience.

# Service Deliverable
For this deliverable, I added backend endpoints that receive user information and game data and send information about popular games.
- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to third party endpoints - Called Board Game Geek API from the backend to retrieve popular games (still working on getting it complelty functional), and integrated the quote API (quote.cs260) on the map page from the frontend (this is working!).
- Backend service endpoints - Implemented placeholder endpoints for login to store the current user on the server (these ones work). Added endpoints for storing game data and sending current popular games (not fully funcitonal yet).
- Frontend calls service endpoints -  I used the fetch function to interact with backend service endpoints for retrieving and storing game data, user info, and popular games.


# DB/Login Deliverable
- MongoDB Atlas database created - done!
- Stores data in MongoDB - done!
- User registration - Creates a new account in the database.
- Existing user - Stores the game rating data. Not under a specific user yet...
- Use MongoDB to store credentials - Stores both user and games rated.
- Restricts functionality - You don't have access to anything until you log in. 
Once loged in you can rate games and see a list of all the games rated.

# Websocket
- Backend listens for WebSocket connection - done!
- Frontend makes WebSocket connection - done! (For some reason it keeps not connecting but i can't figure it out)
- Data sent over WebSocket connection - Working on connecting friends.
- WebSocket data displayed - All user votes ratings display in real time on the homescreen. (working on this)

<!-- # Current Login
**username:** `testuser`
**password:** `password123` -->







