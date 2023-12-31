const { Schema, model } = require("mongoose")

const taskSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Task must hace a title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Task must have a description']
    },
    state: {
        type: String,
        enum: ['TODO', 'ONGOING', 'REVIEW', 'DONE'],
        default: 'TODO'
    },
    startDate: {
        type: Date,
        required: [true, 'Task must have a starting date']
    },
    endDate: {
        type: Date,
        required: [true, 'Task must have an ending date']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
    {
        timestamps: true
    })

const Task = model('Task', taskSchema)

module.exports = Task 