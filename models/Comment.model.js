const { Schema, model } = require("mongoose")

const commentSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: ['Task', 'Project']
    },
    content: {
        type: String,
        required: true
    },

},
    {
        timestamps: true
    }
)

const Comment = model('Comment', commentSchema)

module.exports = Comment