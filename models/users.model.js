const App = require('../app');

class User{

    constructor(name, mail, password, number){
        this.id
        this.username
        this.mail
        this.password
        this.number
        this.active
    }

    getAllUser(){
        return new Promise((success, reject)=>{
            App.connect.query('SELECT * FROM User', (err, result)=>{
                if(err) {
                    console.log("Erreur a la requete :"+err);
                    reject(err);
                    return
                }
                success(result);
            })
        });
    }

    getUserById(id){
        return new Promise((success, reject)=>{
            App.connect.query('SELEC * FROM User WHERE `U_id` = ?', id,  (err, result)=>{
                if(err) {
                    console.log("Erreur a la requete :"+err);
                    reject(err);
                    return
                }
                success(result);
            })
        });
    }
    
}

module.exports = User;