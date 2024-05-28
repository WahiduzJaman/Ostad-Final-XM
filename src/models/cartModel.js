const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
   color: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    size: { type: String, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { timestamps: true, versionKey: false });

const CartModel = mongoose.model('carts', DataSchema);
module.exports = CartModel;