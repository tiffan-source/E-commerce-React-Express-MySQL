const Route = require('../app').route;
const UserControl = require('../controllers/user.control');

const userControl = new UserControl()

Route.get('/users', userControl.allUser);
Route.get('/users:id', userControl.userById)

module.exports = Route