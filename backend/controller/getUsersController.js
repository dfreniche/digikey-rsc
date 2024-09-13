const {usersCollection} = require('../mongodb.js');

const getAllUsers = async (req, res) => { 
    res.status(301).json([]);
};

module.exports = getAllUsers;