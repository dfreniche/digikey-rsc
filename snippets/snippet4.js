// deleteUserController.js

const deleteUser = async (req, res, next) => {
    
    console.log(JSON.stringify(req.body));
    try {
        const result = await usersCollection.deleteOne( {_id: new ObjectId(req.body.id)} );

        // Send the results as the response
        res.status(201).json(result);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = deleteUser;