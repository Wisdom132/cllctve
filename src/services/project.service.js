const Project = require('../models/project')
class ProjectService {
    async getAllProjects() {
        return await Project.find()
    }
}
module.exports = ProjectService


