const App = require('./app')
const route = require('./routes/users.route')

App.connectionDatabase();

App.initAllRoute(route);

App.listenApp();

