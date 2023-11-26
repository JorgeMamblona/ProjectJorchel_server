
class ProjectService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.API_BASE_URL}`
        })
    }


}

const projectService = new ProjectService()
exports.module = projectService