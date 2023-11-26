const router = require("express").Router()

const {
    getAllProjects,
    getAllOwnedProjects,
    projectDetailshandler,
    projectCreateHandler,
    projectEditHandler,
    projectDeleteHandler
} = require("../controllers/project.controllers")


router.get("/getAllProjects", getAllProjects)

router.get("/getOwnedProjects", getAllOwnedProjects)

router.post("/create", projectCreateHandler)

router.get("/:project_id", projectDetailshandler)

router.put("/:project_id/edit", projectEditHandler)

router.delete("/:project_id/delete", projectDeleteHandler)

module.exports = router
