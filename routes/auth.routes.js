const Project = require("../models/Project.model")
const User = require("../models/User.model")

const router = require("express").Router()

const bcrypt = require('bcryptjs')
const saltRounds = 10

router.post('/sign-up', (req, res, next) => {

    const { email, password, username, image } = req.body

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
                image
            })
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

module.exports = router
