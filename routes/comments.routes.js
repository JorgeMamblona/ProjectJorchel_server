const router = require("express").Router()

const {

    create,
    getParentComments

} = require("../controllers/comments.controllers")

const { verifyToken } = require('../middleware/verifyToken')


router.post("/create", verifyToken, create)

router.post("/getParentComments", getParentComments)

module.exports = router
