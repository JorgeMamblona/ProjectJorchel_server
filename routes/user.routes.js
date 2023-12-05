const router = require("express").Router()

const {
    listAllUsers,
    lisUsersById,
    findUserById
} = require("../controllers/user.controllers")


router.post('/listAllUsers', listAllUsers)

router.post('/listUsersById', lisUsersById)

router.post('/findUserById', findUserById)


module.exports = router
