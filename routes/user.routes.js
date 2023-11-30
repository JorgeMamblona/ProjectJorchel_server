const router = require("express").Router()

// TODO: RENOMINAR CONTROLADORES

const {
    listAllUsersHandler,
    lisUsersByIdHandler
} = require("../controllers/user.controllers")


router.post('/listAllUsers', listAllUsersHandler)

router.post('/listUsersById', lisUsersByIdHandler)


module.exports = router
