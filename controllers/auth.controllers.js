const User = require("../models/User.model")

const jwt = require("jsonwebtoken")

const bcrypt = require('bcryptjs')
const saltRounds = 10


//create new User
const signup = (req, res, next) => {

    const { email, password, username, avatar } = req.body

    if (password.length < 2) {

        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {

            if (foundUser) {
                res.status(400).json({ message: 'User already exists' })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({
                email,
                password: hashedPassword,
                username,
                avatar
            })
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}


//User login 
const userLogin = (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {

        res.status(400).json({ message: 'Please, insert email and password' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {

            if (!foundUser) {
                res.status(400).json({ message: 'User not found' })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar } = foundUser
                const payload = { _id, email, username, avatar }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: '6h' }
                )

                res.json({ authToken })

            } else {
                res.status(401)({ message: 'Incorrect password' })
            }
        })
        .catch(err => next(err))
}


//get user after verify
const LoggedUser = (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
}

module.exports = {
    signup,
    userLogin,
    LoggedUser
}