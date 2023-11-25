const { Schema, model } = require("mongoose")

const projectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Project must hace a title'],
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
    states: {
        type: String,
        enum: ['ToDo', 'OnGoing', 'Review', 'Done'],
        default: 'ToDo'
    },
    startDate: {
        type: Date,
        required: [true, 'Project must have a starting date']
    },
    endDate: {
        type: Date,
        required: [true, 'Project must have an ending date']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }
},
    {
        timestamps: true
    })

const Project = model('Project', projectSchema)

module.exports = Project 