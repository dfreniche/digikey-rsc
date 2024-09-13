const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB Atlas cluster
// add it to a .env file inside this folder
// example .env file
// DATABASE_URI=mongodb+srv://...
const uri = process.env.DATABASE_URI;

