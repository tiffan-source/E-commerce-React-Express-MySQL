const User = require('../models/users.model')

class UserControl{

    async allUser(req, res){
        var user = new User();

        try{
            var result = await user.getAllUser();
            if(!result.length) res.status(200).json("Data empty");

            res.status(200).json(result);
        }catch(err){
            console.log("Il y a eu une erreur "+ err);
            res.status(500).json(err);
        }

    }

    async userById(req, res){
        var user = new User();

        try{
            var result = await user.getUserById(req.params.id);
            res.status(200).json(result);
        }catch(err){
            console.log("Il y a eu une erreur "+ err);
            res.status(500).json(err);
        }
    }

}

module.exports = UserControl;