
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },//needs trimmerd
        email: { type: String, required: true, unique: true }, // needs verification
        // thoughts: array of _id vals referencing Thought model
        // friends: array of _id vals referencing User model
    },
    {
        toJSON: { virtuals: true, getters: true }
    }
); 

//virtual 'friendCount' retrienves length of friends arr 

const User = model('User', UserSchema);

module.exports = User;