const router = require("express").Router()

const { verifyToken } = require('../middleware/verifyToken')

const {
    getAllTasks,
    getProjectTasksByState,
    getOwnedTasks,
    taskCreate,
    tasksDetails,
    taskEdit,
    taskDelete
} = require('./../controllers/task.controllers')

router.get('/getAllTasks', getAllTasks)

router.post('/getProjectTasksByState', getProjectTasksByState)

router.get('/getOwnedTasks', verifyToken, getOwnedTasks)

router.post('/create', verifyToken, taskCreate)

router.get('/:task_id', tasksDetails)

router.put('/:task_id/edit', taskEdit)

router.delete('/:task_id/delete', taskDelete)


module.exports = router