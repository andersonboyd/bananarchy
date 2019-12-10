const db = require("../models");

module.exports = {
    findOne: function(req, res){
        db.Items
            .findById({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res){
        console.log("hit find all control");
        db.Items
            .find({})
            .sort({ img: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}