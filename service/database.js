const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
});


async function testDatabase() {

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas!");

        // Access the database and collection
        const db = client.db('rental');
        const collection = db.collection('house');

        // Insert a sample document
        const house = {
            name: 'Beachfront views',
            summary: 'From your bedroom to the beach, no shoes required',
            property_type: 'Condo',
            beds: 1,
        };
        const result = await collection.insertOne(house);
        console.log("Document inserted with _id:", result.insertedId);

        // Query the documents
        const query = { property_type: 'Condo', beds: { $lt: 2 } };
        const options = { sort: { price: -1 }, limit: 10 };
        const cursor = collection.find(query, options);
        const rentals = await cursor.toArray();
        console.log("Found documents:", rentals);

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Close the client
        await client.close();
    }
}

testDatabase().catch(console.error);
