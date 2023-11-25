const router = require("express").Router()

const { verifyToken } = require('../middleware/verifyToken')

const {
    signupHandler,
    userLoginHandler,
    LoggedUserHandler
} = require('../controllers/auth.controllers')

router.post('/sign-up', signupHandler)

router.post('/log-in', userLoginHandler)

router.get('/verify', verifyToken, LoggedUserHandler)


module.exports = router
