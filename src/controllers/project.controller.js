const projectService = require('../services/project.service');
const resolveResponse = require('../shared/resolvers');
const { UseBody, UseParams } = require('../shared/helpers/index');
const BasicControllerImpl = require('../shared/basics/basic.controller');

// PROJECT CRUD CONTROLLER IMPLEMENTED IN FEW LINES OF CODE :)
class ProjectController extends BasicControllerImpl {
  service = projectService;
}

module.exports = new ProjectController();
