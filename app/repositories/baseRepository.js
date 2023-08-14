const hashids = require('../../config/hashid')
class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.find({});
  }

  async getById(id) {
    return await this.model.findById(hashids.decodeHex(id));
  }

  async create(entity) {
    const newEntity = new this.model(entity);
    return await newEntity.save();
  }

  async update(id, entity) {
    const updatedEntity = await this.model.findByIdAndUpdate(hashids.decodeHex(id), entity, {
      new: true,
    });
    return updatedEntity;
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(hashids.decodeHex(id));
  }
}

module.exports = BaseRepository;
