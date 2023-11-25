const { Schema, model } = require("mongoose")

const userShema = new Schema({
    email: {

    },
    password: {},
    username: {},
    role: {}
})

constUser = model("User", userSchema)

module.exports = User