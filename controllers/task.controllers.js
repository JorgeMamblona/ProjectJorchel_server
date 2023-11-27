const { response } = require('express')
const Task = require('./../models/Task.model')

const getAllTasks = (req, res, next) => {
    Task
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

}

const getOwnedTasks = (req, res, next) => {
    let { owner } = req.params
    owner = '6561eb5acdb9b8906f93290a'
    Task
        .find({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getProjectTasks = (req, res, next) => {
    let { project } = req.params
    project = '656203ee8c584c6c578b5ae2'

    Task
        .find({ project })
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
    getProjectTasks,
    getOwnedTasks,
    taskCreateHandler,
    tasksDetailsHandler,
    taskEditHandler,
    taskDeleteHandler

}