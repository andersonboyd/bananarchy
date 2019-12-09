const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/all")
    .get(itemsController.findAll)

router.route("/find/:id")
    .get(itemsController.findOne)

module.exports = router;