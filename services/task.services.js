class TaskService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.API_BASE_URL}`
        })
    }
}
const taskService = new TaskService()
exports.module = taskService