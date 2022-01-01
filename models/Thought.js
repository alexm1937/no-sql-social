
const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText : {type: String, required: true, minlength: 1, maxlength: 280 },
        createdAt: {},
        username: { type: Schema.Types.ObjectId, ref: 'User'}//use populate in route to fill in!
        // reactions: array of subdocs (reactionSchema)
    },
    {
        toJSON: { virtuals: true, getters: true }
    }
)

//virtual 'reactionCount' 

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;