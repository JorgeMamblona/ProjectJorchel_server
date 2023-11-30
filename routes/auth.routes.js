const router = require("express").Router()

const { verifyToken } = require('../middleware/verifyToken')

const {
    signup,
    userLogin,
    LoggedUser
} = require('../controllers/auth.controllers')

router.post('/sign-up', signup)

router.post('/log-in', userLogin)

router.get('/verify', verifyToken, LoggedUser)


module.exports = router
