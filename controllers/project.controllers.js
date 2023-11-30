const Project = require("../models/Project.model")


//List all projects 
const getAllProjects = (req, res, next) => {
    Project
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


//Lisit owned projects
const getOwnedProjects = (req, res, next) => {

    const { owner } = req.body

    Project
        .find({ owner })
        .then(response => res.status(200).json(response))
        .catch(err => next(err))
}


//Create new Project
const projectCreateHandler = (req, res, next) => {

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


const projectDetailshandler = (req, res, next) => {

    const { project_id } = req.params

    Project
        .findById(project_id)
        .then(response => res.status(200).json(response))
        .catch(err => next(err))
}


const projectEditHandler = (req, res, next) => {

    const { project_id } = req.params
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
        .findByIdAndUpdate(
            project_id,
            {
                title,
                description,
                image,
                state,
                startDate,
                endDate,
                owner,
                colaborators
            }
        )
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


const projectDeleteHandler = (req, res, next) => {

    const { project_id } = req.params

    Project
        .findByIdAndDelete(project_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllProjects,
    getOwnedProjects,
    projectDetailshandler,
    projectCreateHandler,
    projectEditHandler,
    projectDeleteHandler
}