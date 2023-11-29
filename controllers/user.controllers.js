const User = require("../models/User.model")


const listAllUsersHandler = (req, res, next) => {

    const { userToFind } = req.body

    User
        .find({ username: new RegExp('^' + userToFind) })
        .sort({ username: 1 })
        .select({ username: 1, image: 1 })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))


}

const lisUsersByIdHandler = (req, res, next) => {

    const { participants } = req.body

    User
        .find({ _id: { $in: participants } })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))
}




module.exports = {
    listAllUsersHandler,
    lisUsersByIdHandler
}