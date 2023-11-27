const router = require("express").Router()

const { listAllUsersHandler } = require("../controllers/user.controllers")


router.get('/listAllUsers', listAllUsersHandler)


module.exports = router
