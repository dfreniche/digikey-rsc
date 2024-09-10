const { ObjectId } = require('mongodb');
const {usersCollection} = require('../mongodb.js');

const postUser = async (req, res, next) => {
    const data = req.body;
    try {
        // a new ObjectId is generated for each new user
        const filter = { _id: new ObjectId() };
        // data is passed to the $set operator to update the document OR CREATE A NEW ONE
        const update = { $set: data };
        // setting the upsert option to true creates a new document if no documents match the query
        const options = { upsert: true, returnDocument: 'after' }; 

        // returns the newly created document
        const result = await usersCollection.findOneAndUpdate( filter , update , options );

        // Send the results as the response
        res.status(201).json(result);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = postUser;