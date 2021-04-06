const express = require('express');
require('dotenv').config({path : './configs/.env'});
const connection= require('./configs/db.config');

class App{
    constructor(port, connectionDB){
        this.app = express();
        this.router = express.Router();
        this.portApp = port;
        this.connection = connectionDB;
    }

    get connect(){
        return this.connection;
    }

    get route(){
        return this.router;
    }

    get myApp(){
        return this.app;
    }

    connectionDatabase(){
        this.connection.connect((err)=>{
            if (err) console.log('Erreur de connection a la base de donnee '+err);

            console.log('Bonne connection a la base de donnée');
        });
    }

    listenApp(){
        this.app.listen(this.portApp, (err)=>{

            if(err) console.log("Erreur de connection a l'application "+err);

            console.log("Mon appli marche sur le port "+this.portApp);
        })
    }

    initAllRoute(routes){
        this.app.use('/', routes);
    }

    initialiseMiddleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}

module.exports = new App(process.env.PORT_APP, connection);