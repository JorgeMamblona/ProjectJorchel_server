const Project = require("../models/Project.model")

//List all projects 
const getAllProjects = (req, res, next) => {
    Project
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

//list projects owned by user > NOT TESTED YET

const getAllOwnedProjects = (req, res, next) => {

    const { owner } = req.params // ----------------------> WAT

    Project
        .find({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

//Create new Project
const ProjectCreateHandler = (req, res, next) => {

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
}


module.exports = {
    ProjectCreateHandler,
    getAllProjects,
    getAllOwnedProjects
}