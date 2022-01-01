
const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');

//schema for subdoc Reaction
const ReactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true, minlength: 1, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: (createdAtVal) => formatDate(createdAtVal) }
    }
);


//schema for thoughts. Reactions are subdocs of Thought
const ThoughtSchema = new Schema(
    {
        thoughtText : {type: String, required: true, minlength: 1, maxlength: 280 },
        createdAt: { type: Date, default: Date.now, get: (createdAtVal) => formatDate(createdAtVal) },
        username: { type: String, ref: 'User', required: true },
        reactions: [ReactionSchema]
    },
    {
        toJSON: { virtuals: true, getters: true },
        id: false
    }
);

//virtual 'reactionCount' 
ThoughtSchema.virtual('ReactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;