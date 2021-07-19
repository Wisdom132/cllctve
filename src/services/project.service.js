const Project = require('../models/project');

const BasicServiceImpl = require('../shared/basics/basic.service');

class ProjectService extends BasicServiceImpl {
  model = Project;
  modelName = 'Project';
}

module.exports = new ProjectService();
