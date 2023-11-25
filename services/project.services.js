
class ProjectService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${process.env.API_BASE_URL}`
        })
    }

}