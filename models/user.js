const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conf_password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Prefer not to say'],
        required: true
    }
})

const user = mongoose.model('user', userSchema);
module.exports = user;