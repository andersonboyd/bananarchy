const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    items: [{type: Schema.Types.ObjectId, ref: "Items"}]
});

const Cart = mongoose.model("Cart", cartSchema);

Cart.aggregate([
    {  $lookup:
        {
            from: "items",
            localField: "inCart",
            foreignField: "_id",
            as: "items"
        }
    }
]);

module.exports = Cart;