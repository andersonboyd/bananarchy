const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    img: String,
    cost: { type: Number, required: true },
    inCart: { type: Boolean, default: false}
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;

