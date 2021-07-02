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
            res.status(500).json({
                error: err,
                msg: "An error occured"
            })
        }

    }


    static async createProject(req, res) {
        let projectService = new ProjectService();
        try {
            let payload = {
                projectName: req.body.projectName
            }
            let project = await projectService.createProject(payload);
            res.status(200).json({
                msg: "Project created",
                data: project
            })
        } catch (err) {
            res.status(500).json({
                error: err,
                msg: "An error occured"
            })
        }

    }
}

module.exports = ProjectController;