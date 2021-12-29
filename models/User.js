
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true }, // needs verification
        // thoughts: 
        // friends: 
    },
    {
        toJSON: { virtuals: true, getters: true }
    }
); 

const User = model('User', UserSchema);

module.exports = User;