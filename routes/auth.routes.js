const router = require("express").Router()

const {
    signupHandler
} = require('../controllers/auth.controllers')

router.post('/sign-up', signupHandler)


module.exports = router
