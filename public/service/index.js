const express = require('express');
const uuid = require('uuid');
const app = express();

// user storage
let users = {};

//parse JSON bodies
app.use(express.json());

// Create and configure the API router
var apiRouter = express.Router();
app.use('/api', apiRouter);

//create a new user
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
  
// login an existing user
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
  
// logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
});

// Start the server
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
