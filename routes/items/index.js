const router = require("express").Router();
const itemsRoute = require("./items");

router.use("/", itemsRoute);

module.exports = router;