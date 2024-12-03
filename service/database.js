const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('startup');
const userCollection = db.collection('user');
const ratingCollection = db.collection('ratings');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Connected successfully to MongoDB server");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function insertRating(rating) {
  try {
      return await ratingCollection.insertOne(rating);
  } catch (error) {
      console.error('Failed to insert rating:', error);
      throw error;
  }
}

async function getRatings() {
  try {
      return await ratingCollection.find().toArray();
  } catch (error) {
      console.error('Failed to retrieve ratings:', error);
      throw error;
  }
}
async function getRatingsByUser(userId) {
  try {
    return await ratingCollection.find({ userId }).toArray();
  } catch (error) {
    console.error('Failed to fetch ratings by user:', error);
    throw error;
  }
}
module.exports = {
  getUser,
    getUserByToken,
    createUser,
    insertRating,
    getRatings,
    ratingCollection,
    getRatingsByUser,
};
