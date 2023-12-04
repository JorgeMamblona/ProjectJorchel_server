const router = require("express").Router()

const {

    create,
    getProjectComments

} = require("../controllers/comments.controllers")

const { verifyToken } = require('../middleware/verifyToken')


router.post("/create", verifyToken, create)

router.post("/getProjectComments", getProjectComments)

module.exports = router
