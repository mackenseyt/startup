const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';
const { ratingCollection } = require('./database.js');


// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/rate-game', async (req, res) => {
  const authToken = req.cookies[authCookieName];
  if (!authToken) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const user = await DB.getUserByToken(authToken);
  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const { gameId, rating, difficulty, review } = req.body;
  if (!gameId || !rating || !difficulty || !review) {
    return res.status(400).send({ msg: 'Invalid input' });
  }

  const newRating = {
    userId: user._id,
    gameId,
    rating,
    difficulty,
    review,
    date: new Date()
  };

  try {
    await DB.insertRating(newRating);
    res.status(201).send({ msg: 'Rating saved successfully' });
  } catch (error) {
    console.error('Failed to save rating:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});
apiRouter.get('/user-ratings', async (req, res) => {
  const authToken = req.cookies[authCookieName];
  if (!authToken) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const user = await DB.getUserByToken(authToken);
  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  try {
    const ratings = await DB.getRatingsByUser(user._id);
    res.status(200).send(ratings);
  } catch (error) {
    console.error('Failed to fetch user ratings:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.post('/rate-game', async (req, res) => {
  console.log('Received data:', req.body);
  const { gameId, rating, difficulty, review } = req.body;
  if (!gameId || !rating || !difficulty || !review) {
      return res.status(400).send({ msg: 'Invalid input' });
  }
  const newRating = { gameId, rating, difficulty, review, date: new Date() };
  await ratingCollection.insertOne(newRating);
  res.status(201).send({ msg: 'Rating saved successfully' });
});


apiRouter.get('/rate-game', async (_req, res) => {
    const ratings = await ratingCollection.find().toArray();
    res.send(ratings);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

