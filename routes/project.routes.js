const Project = require("../models/Project.model")
const User = require("../models/User.model")

const router = require("express").Router()


router.get("/getAllProjects", (req, res, next) => {
    Project
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

//NOT TESTED YET
router.get("/getOwnedProjects", (req, res, next) => {

    const { owner } = req.params // ----------------------> WAT

    Project
        .find({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post("/create", (req, res, next) => {

    const {
        title,
        description,
        image,
        state,
        startDate,
        endDate,
        owner,
        colaborators
    } = req.body

    Project
        .create({
            title,
            description,
            image,
            state,
            startDate,
            endDate,
            owner,
            colaborators
        })
        .then(response => res.status(201).json(response))
        .catch(err => next(err))
})

module.exports = router
