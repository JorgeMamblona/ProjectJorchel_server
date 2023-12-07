const { Schema, model } = require("mongoose")

const commentSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    parent: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'scope'
    },
    scope: {
        type: String,
        required: true,
        enum: ['Project', 'Task']
    },
    content: {
        type: String,
        required: [true, 'Please type something to comment'],
        minlength: [2, '2 characters minimun length to comment']
    },

},
    {
        timestamps: true
    }
)

const Comment = model('Comment', commentSchema)

module.exports = Comment