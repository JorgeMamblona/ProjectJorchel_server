const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ['USER', 'PM', 'ADMIN'],
        default: 'USER'
    }
},
    {
        timestamps: true
    })

const User = model("User", userSchema)

module.exports = User