const db = require("../models");

module.exports = {
    create: function(req, res){
        db.Cart
            .create({})
            .populate("items")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        db.Cart
            .findOneAndUpdate({$push: {items: req.body._id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    removeItem: function(req, res){
        db.Cart
            .findOneAndUpdate(
                {$pull: {items: req.body._id}}, 
                {safe: true, upsert: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}