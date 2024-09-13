// getUsersController.js

const getAllUsers = async (req, res) => {
    try {
        const results = await usersCollection.find({}).limit(10).toArray();

            // Send the results as the response
        res.status(200).json(results);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = getAllUsers;