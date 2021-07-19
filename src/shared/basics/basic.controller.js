var pluralize = require('pluralize');
const { UseParams, UseBody, UseQuery } = require('../helpers/index');
const resolveResponse = require('../resolvers/index');

class BasicControllerImpl {
  service;

  async create(req, res) {
    const createDto = UseBody(req);
    resolveResponse({
      res,
      service: this.service.create(createDto),
      message: `${this.service.modelName} created`,
    });
  }

  async findAll(req, res) {
    const { page, limit } = UseQuery(req);
    resolveResponse({
      res,
      service: this.service.findAll({ page, limit }),
      message: `All ${pluralize(this.service.modelName)}`,
    });
  }

  async list(req, res) {
    resolveResponse({
      res,
      service: this.service.list(),
      message: `All ${pluralize(this.service.modelName)}`,
    });
  }

  async findOne(req, res) {
    const { id } = UseParams(req);
    resolveResponse({
      res,
      service: this.service.findOne(id),
      message: `${this.service.modelName} found`,
    });
  }

  async update(req, res) {
    const { id } = UseParams(req);
    const updateDto = UseBody(req);
    resolveResponse({
      res,
      service: this.service.update(id, updateDto),
      message: `${this.service.modelName} updated`,
    });
  }

  async remove(req, res) {
    const { id } = UseParams(req);
    resolveResponse({
      res,
      service: this.service.remove(id),
      message: `${this.service.modelName} removed`,
    });
  }
}

module.exports = BasicControllerImpl;
