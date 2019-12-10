const router = require("express").Router();
const cartRoute = require("./cart");

router.use("/", cartRoute);

module.exports = router;