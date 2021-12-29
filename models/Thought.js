
const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText : {},
        createdAt: {},
        // username: user who created thought
        // reactions: array of subdocs (reactionSchema)
    },
    {
        toJSON: { virtuals: true, getters: true }
    }
)

//virtual 'reactionCount' 