const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/all")
    .get(function(req, res, next){
        console.log("hit item all route");
        next();
    }, itemsController.findAll)

router.route("/find/:id")
    .get(itemsController.findOne)

module.exports = router;