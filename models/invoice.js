const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    parent_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    invoice_no: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    f_price: {
        type: Number,
        required: true
    }
});

const invoice = mongoose.model('invoice', invoiceSchema);
module.exports = invoice;