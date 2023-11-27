const router = require("express").Router()

const { listAllUsersHandler } = require("../controllers/user.controllers")


router.post('/listAllUsers', listAllUsersHandler)


module.exports = router
