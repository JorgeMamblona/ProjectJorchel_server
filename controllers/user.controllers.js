const User = require("../models/User.model")


const listAllUsersHandler = (req, res, next) => {

    User
        .find()
        .sort({ username: 1 })
        .select({ username: 1 })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))

}
module.exports = {
    listAllUsersHandler
}