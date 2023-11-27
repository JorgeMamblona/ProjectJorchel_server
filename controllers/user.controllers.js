const User = require("../models/User.model")


const listAllUsersHandler = (req, res, next) => {
    const { userToFind } = req.body
    console.log(userToFind)

    User
        .find({ username: new RegExp('^' + userToFind) })
        .sort({ username: 1 })
        .select({ username: 1, image: 1 })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))

}
module.exports = {
    listAllUsersHandler
}