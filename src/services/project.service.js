const Project = require('../models/project')
class ProjectService {
    async getAllProjects() {
        return await Project.find()
    }

    async createProject(data) {
        return await Project.create(data);
    }
}
module.exports = ProjectService


