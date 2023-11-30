const Task = require('./../models/Task.model')


const getAllTasks = (req, res, next) => {

    Task
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOwnedTasks = (req, res, next) => {

    const { _id: owner } = req.payload

    Task
        .find({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getProjectTasksByState = (req, res, next) => {

    let { project_id: project, state } = req.body

    Task
        .find({ $and: [{ project }, { state }] })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const taskCreate = (req, res, next) => {

    const { _id: owner } = req.payload

    const {
        title,
        description,
        state,
        startDate,
        endDate,
        project,
        participants } = req.body

    Task
        .create({
            title,
            description,
            state,
            startDate,
            endDate,
            owner,
            project,
            participants
        })
        .then(response => res.status(201).json(response))
        .catch(err => next(err))
}

const tasksDetails = (req, res, next) => {

    const { task_id } = req.params

    Task
        .findById(task_id)
        .then(reponse => res.status(201).json(reponse))
        .catch(err => next(err))
}

const taskEdit = (req, res, next) => {

    const { task_id } = req.params

    const {
        title,
        description,
        state,
        startDate,
        endDate,
        owner,
        project,
        participants
    } = req.body

    Task
        .findByIdAndUpdate(task_id,
            {
                title,
                description,
                state,
                startDate,
                endDate,
                owner,
                project,
                participants
            })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


const taskDelete = (req, res, next) => {

    const { task_id } = req.params

    Task
        .findByIdAndDelete(task_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllTasks,
    getProjectTasksByState,
    getOwnedTasks,
    taskCreate,
    tasksDetails,
    taskEdit,
    taskDelete
}