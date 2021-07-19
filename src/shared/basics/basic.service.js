const { Model } = require('mongoose');
const { NotFoundException } = require('../exceptions');
const { Helper } = require('../helpers/index');

// BASIC CRUD SERVICE CLASS THAT CAN BE EXTENDED
class BasicServiceImpl {
  // mongoose model/schema: Model/Schema
  model;
  // relationships: string[]
  populate = [];

  // name of model: string
  modelName;

  create(createDto) {
    return this.model.create(createDto);
  }

  findAll(pagination, filter = {}) {
    return Helper.paginate(this.model, pagination, filter);
  }

  list(options = {}) {
    return this.model.find(options).populate(this.populate);
  }

  async findOne(id) {
    const response = await this.model.findOne({ _id: id });
    if (!response) {
      throw NotFoundException(`${this.modelName} Not Found`);
    }
    return response;
  }

  async update(id, updateDto) {
    await this.findOne(id);
    await this.model.updateOne({ _id: id }, updateDto);
    return this.findOne(id);
  }

  async remove(id) {
    await this.findOne(id);
    await this.model.deleteOne({ _id: id });
    return {};
  }
}

module.exports = BasicServiceImpl;
