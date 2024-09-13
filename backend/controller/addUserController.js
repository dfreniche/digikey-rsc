const { ObjectId } = require('mongodb');
const {usersCollection} = require('../mongodb.js');

const postUser = async (req, res) => {
    res.status(301).json({});
}

module.exports = postUser;