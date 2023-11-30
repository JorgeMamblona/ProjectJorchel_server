const router = require("express").Router()

const {
    listAllUsers,
    lisUsersById
} = require("../controllers/user.controllers")


router.post('/listAllUsers', listAllUsers)

router.post('/listUsersById', lisUsersById)


module.exports = router
