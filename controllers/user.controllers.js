const User = require("../models/User.model")


const listAllUsers = (req, res, next) => {

    const { userToFind } = req.body

    User
        .find({ username: new RegExp('^' + userToFind) })
        .sort({ username: 1 })
        .select({ username: 1, avatar: 1 })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))
}

const lisUsersById = (req, res, next) => {

    const { participants } = req.body

    User
        .find({ _id: { $in: participants } })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))
}


module.exports = {
    listAllUsers,
    lisUsersById
}