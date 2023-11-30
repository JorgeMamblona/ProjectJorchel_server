const router = require("express").Router()

import { verifyToken } from "../middleware/verifyToken"

const {
    getAllTasks,
    getProjectTasksByState,
    getOwnedTasks,
    taskCreateHandler,
    tasksDetailsHandler,
    taskEditHandler,
    taskDeleteHandler
} = require('./../controllers/task.controllers')

router.get('/getAllTasks', getAllTasks)

router.post('/getProjectTasksByState', getProjectTasksByState)

router.get('/getOwnedTasks', verifyToken, getOwnedTasks)

router.post('/create', taskCreateHandler)

router.get('/:task_id', tasksDetailsHandler)

router.put('/:task_id/edit', taskEditHandler)

router.delete('/:task_id/delete', taskDeleteHandler)


module.exports = router