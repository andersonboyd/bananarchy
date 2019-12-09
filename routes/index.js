const path = require("path");
const router = require("express").Router();
const cartRoute = require("./cart");
const itemsRoute = require("./items");

router.use("/cart", cartRoute);
router.use("/items", itemsRoute);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;