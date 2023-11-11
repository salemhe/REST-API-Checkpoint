const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    age: {
        type: Number,
        min: 18,
    },

    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },

    phoneNumber: {
        type: String,
        required: true,
    }
});

//create and export user model

const User = mongoose.model('User', userSchema);

module.exports = User;