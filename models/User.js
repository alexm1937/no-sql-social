
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true }, // needs verification
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            }
        ],
    },
    {
        toJSON: { virtuals: true }, //shouldnt need getters?
        id: false 
    }
); 

//virtual 'friendCount' retrieves length of friends arr 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;