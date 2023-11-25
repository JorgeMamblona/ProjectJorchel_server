const router = require("express").Router()

const {
    ProjectCreateHandler,
    getAllProjects,
    getAllOwnedProjects
} = require("../controllers/project.controllers")


router.get("/getAllProjects", getAllProjects)

router.get("/getOwnedProjects", getAllOwnedProjects) //NOT TESTED YET

router.post("/create", ProjectCreateHandler)

module.exports = router
