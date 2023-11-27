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
        required: true,
        minlength: [10, 'Mínimo 10 caracteres']
    },

},
    {
        timestamps: true
    }
)

const Comment = model('Comment', commentSchema)

module.exports = Comment