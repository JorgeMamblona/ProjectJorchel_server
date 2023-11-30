const Task = require('./../models/Task.model')


const getAllTasks = (req, res, next) => {

    Task
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

// TODO: RECOGER EL ID DEL USUARIO LOGUEADO SIEMPRE DE REQ.PAYLOAD
const getOwnedTasks = (req, res, next) => {

    let { owner } = req.params
    // const {_id: owner } = req.payload

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


const taskCreateHandler = (req, res, next) => {

    const {
        title,
        description,
        state,
        startDate,
        endDate,
        owner,
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

const tasksDetailsHandler = (req, res, next) => {

    const { task_id } = req.params

    Task
        .findById(task_id)
        .then(reponse => res.status(201).json(reponse))
        .catch(err => next(err))
}

const taskEditHandler = (req, res, next) => {

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


const taskDeleteHandler = (req, res, next) => {

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
    taskCreateHandler,
    tasksDetailsHandler,
    taskEditHandler,
    taskDeleteHandler
}