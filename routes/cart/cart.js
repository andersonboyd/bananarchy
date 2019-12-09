const router = require("express").Router();
const cartController = require("../../controllers/cartController");

router.route("/create")
    .post(cartController.create)

router.route("/update")
    .post(cartController.update)

router.route("/remove")
    .post(cartController.removeItem)

module.exports = router;