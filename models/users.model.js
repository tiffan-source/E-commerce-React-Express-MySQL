const connect = require('../app').connect;

class User{

    constructor(property){
        this.id = property.id;
        this.username = property.username;
        this.mail = property.mail;
        this.birthday = property.birthday;
        this.password = property.password;
        this.number = property.number;
        this.active = property.active;
    }

    get myId(){
        return this.id
    }
    get myUsername(){
        return this.username
    }
    get myMail(){
        return this.mail
    }
    get myBirthday(){
        return this.birthday
    }
    get myPassword(){
        return this.password
    }
    get myNumber(){
        return this.number
    }
    get myActive(){
        return this.active
    }

    static getAllUser(){
        return new Promise((success, reject)=>{
            connect.query('SELECT * FROM User', (err, result)=>{
                if(err) {
                    console.log("Erreur a la requete :"+err);
                    reject(err);
                    return
                }
                success(result);
            })
        });
    }

    static getUserById(id){
        return new Promise((success, reject)=>{
            connect.query('SELECT * FROM User WHERE `U_id` = ?', id,  (err, result)=>{
                if(err) {
                    console.log("Erreur a la requete :"+err);
                    reject(err);
                    return;
                }
                success(result);
            })
        });
    }

    static insertUser(User){
        return new Promise((succes, reject)=>{

            const query = 'INSERT INTO `User` (`U_username`, `U_date_birthday`, `U_mail`, `U_password`, `U_number`, `U_date_create`) VALUES (?, ?, ?, ?, ?, NOW())';

            connect.query(query, [User.myUsername, User.myBirthday, User.myMail, User.myPassword, User.myNumber], (err, result)=>{
                if(err){
                    console.log("Erreur a la requete : "+err);
                    reject(err)
                    return;
                }
                succes(result)
            })
        })
    }
    
}

module.exports = User;