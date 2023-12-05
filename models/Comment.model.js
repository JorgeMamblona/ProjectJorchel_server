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
        required: true,
        minlength: [2, 'Mínimo 2 caracteres']
    },

},
    {
        timestamps: true
    }
)

const Comment = model('Comment', commentSchema)

module.exports = Comment