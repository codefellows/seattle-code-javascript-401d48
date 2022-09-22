'use strict';

class ModelInterface{
  constructor(model){
    this.model = model;
  }

  async create(json){
    console.log('this is our json', json);
    try {
      let record = await this.model.create(json);
      return record;
    } catch (err) {
      console.error('we have an err', err);
      return err;
    }
  }

  async read(id = null){
    try {
      let record;
      if (id){
        record = await this.model.findOne({where: {id}});
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch(err){
      console.error('we have an err', err);
      return err;
    }
  }
}

module.exports = ModelInterface;

