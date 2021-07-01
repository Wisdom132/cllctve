const ProjectService = require('../services/project.service');
const BaseControler = require('./BaseController')

class ProjectController extends BaseControler {
    static async getAllProjects(req, res) {
        let projectService = new ProjectService();
        try {
            let projects = await projectService.getAllProjects();
            res.status(200).json({
                msg: "All Projects",
                data: projects
            })
        } catch (err) {
            console.log(err)
        }

    }
}

module.exports = ProjectController;