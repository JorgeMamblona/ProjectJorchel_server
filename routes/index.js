module.exports = app => {

    const authRoutes = require('./auth.routes')
    app.use('/api/auth', authRoutes)

    const userRoutes = require('./user.routes')
    app.use('/api/users', userRoutes)

    const projectsRoutes = require('./project.routes')
    app.use('/api/projects', projectsRoutes)

    const tasksRoutes = require('./task.routes')
    app.use('/api/tasks', tasksRoutes)

    const uploadRoutes = require('./upload.routes')
    app.use('/api/upload', uploadRoutes)
}