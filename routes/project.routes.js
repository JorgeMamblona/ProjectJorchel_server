const router = require("express").Router()

const { verifyToken } = require('../middleware/verifyToken')

const {
    getAllProjects,
    getOwnedProjects,
    projectDetails,
    projectCreate,
    projectEdit,
    projectDelete
} = require("../controllers/project.controllers")


router.get("/getAllProjects", getAllProjects)

router.get("/getOwnedProjects", verifyToken, getOwnedProjects)

router.post("/create", verifyToken, projectCreate)

router.get("/:project_id", projectDetails)

router.put("/:project_id/edit", projectEdit)

router.delete("/:project_id/delete", projectDelete)


module.exports = router
