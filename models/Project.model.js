const { Schema, model } = require("mongoose")

const projectSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Project must have a title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Project must have a description']
    },
    image: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        enum: ['TODO', 'ONGOING', 'REVIEW', 'DONE'],
        default: 'TODO'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    colaborators: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        timestamps: true
    })

const Project = model('Project', projectSchema)

module.exports = Project 