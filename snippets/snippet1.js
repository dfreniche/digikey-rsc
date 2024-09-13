// mongodb.js

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB Atlas');
});

const db = client.db('digiKey-dev');
const usersCollection = db.collection('users');

// Export the client, db and user's collection for other modules to use
module.exports = {client, db, usersCollection};