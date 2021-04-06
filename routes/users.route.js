const Route = require('../app').route;
const UserControl = require('../controllers/user.control');

Route.get('/users', UserControl.allUser);
Route.get('/users:id', UserControl.userById);
Route.post('/users', UserControl.createUser);

module.exports = Route;