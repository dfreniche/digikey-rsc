const {usersCollection} = require('../mongodb.js');

const searchRoute = async (req, res) => {
  res.status(301).json([]);
}

module.exports = searchRoute;