const getAllUsers = require('./controller/getUsersController.js');
const postUser = require('./controller/addUserController.js');
const search = require('./controller/searchUsersController.js');

function addRoutesTo(app) {
    app.get('/', getAllUsers);

    app.post('/', postUser);

    app.post('/search', search);
}

module.exports = addRoutesTo;