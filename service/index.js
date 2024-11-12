const express = require('express');
const path = require('path');
const uuid = require('uuid');
const axios = require('axios');
const { parseStringPromise } = require('xml2js');

const app = express();
let users = {};
let yourGames = {};

// Parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory (make sure your frontend build is in "public")
app.use(express.static(path.join(__dirname, 'public')));

// Create and configure the API router
var apiRouter = express.Router();
app.use('/api', apiRouter);

// Endpoint to create a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const newUser = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[newUser.email] = newUser;
  
      res.send({ token: newUser.token });
    }
});
  
// Endpoint to login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
  
// Endpoint to logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
});

// Endpoint to get hot games
apiRouter.get('/hotgames', async (req, res) => {
  try {
    const response = await axios.get('https://boardgamegeek.com/xmlapi2/hot?type=boardgame');
    const result = await parseStringPromise(response.data);
    
    const games = result.items.item.map(game => ({
      id: game.$.id,
      rank: game.$.rank,
      name: game.name[0].$.value,
      yearPublished: game.yearpublished ? game.yearpublished[0].$.value : 'N/A',
      thumbnail: game.thumbnail ? game.thumbnail[0].$.value : ''
    }));
    
    res.send(games);
  } catch (error) {
    console.error('Error fetching hot games:', error.message);
    res.status(500).send({ msg: 'Error fetching hot games', error: error.message });
  }
});

// Catch-all route to serve `index.html` for frontend routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


