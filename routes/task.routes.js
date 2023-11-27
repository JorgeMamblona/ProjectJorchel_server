const router = require("express").Router()

const {
    getAllTasks,
    getProjectTasks,
    getOwnedTasks,
    taskCreateHandler,
    tasksDetailsHandler,
    taskEditHandler,
    taskDeleteHandler
} = require('./../controllers/task.controllers')

router.get('/getAllTasks', getAllTasks)

router.get('/getProjectTasks', getProjectTasks)

router.get('/getOwnedTasks', getOwnedTasks)

router.post('/create', taskCreateHandler)

router.get('/:task_id', tasksDetailsHandler)

router.put('/:task_id/edit', taskEditHandler)

router.delete('/:task_id/delete', taskDeleteHandler)

module.exports = router