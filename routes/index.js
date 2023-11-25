module.exports = app => {

    const authRoutes = require('./auth.routes')
    app.use('/api/auth', authRoutes)

    const projectsRoutes = require('./project.routes')
    app.use('/api/projects', projectsRoutes)
}