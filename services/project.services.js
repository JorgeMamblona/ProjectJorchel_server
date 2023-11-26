
class ProjectService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.API_BASE_URL}`
        })
    }

    getAllProyects() {
        //return this.axiosApp.get()
    }


}

const projectService = new ProjectService()
exports.module = projectService