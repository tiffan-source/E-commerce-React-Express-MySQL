const User = require('../models/users.model')

class UserControl{

     static async allUser(req, res){

        try{
            var result = await User.getAllUser();

            if(!result.length) {
                res.status(202).json({data :"Data empty"});
            } else{
                res.status(200).json(result);
            }

        }catch(err){
            console.log("Il y a eu une erreur "+ err);
            res.status(500).json(err);
        }

    }

    static async userById(req, res){
        
        try{
            var result = await User.getUserById(req.params.id);
            res.status(200).json(result);
        }catch(err){
            console.log("Il y a eu une erreur "+ err);
            res.status(500).json(err);
        }
    }

    static async createUser(req, res){

        if (!req.body) {
            res.status(400).json({
              message: "Content can not be empty!"
            });
        }

        try{
            var {username, mail, birthday, password, number} = req.body;
            var user = new User({username, mail, birthday, password, number});

            console.log(user)

            var reponse = await User.insertUser(user);
            res.status(200).json(reponse);
        }catch(err){
            console.log("Il y a une erreur :"+err);
        }

    }

}

module.exports = UserControl;