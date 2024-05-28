const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    payable: { type: Number, required: true },
    cus_details: { type: Object, required: true },
    ship_details: { type: Object, required: true },
    tran_id: { type: String, required: true },
    val_id: { type: String, required: true },
    payment_status: { type: String, required: true },
    delivery_status: { type: String, required: true },
    total: { type: Number, required: true },
    vat: { type: Number, required: true }
}, { timestamps: true, versionKey: false });

const InvoiceModel = mongoose.model('invoices', DataSchema);
module.exports = InvoiceModel;