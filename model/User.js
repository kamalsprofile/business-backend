const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: false,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});
module.exports = mongo.model('User', userSchema)