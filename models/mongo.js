/* eslint-disable new-cap */
/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-empty-function */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

class Model{
  constructor(schema){
    this.schema = schema;
  }
  jsonSchema(){
    console.log( typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function' ? this.schema.jsonSchema() : {} ;
  }
  get(_id){
    let queryObject = _id ? { _id} : {} ; // the empty obj mean give me all the thing in schema (all the thing in the resourse)
    return this.schema.find(queryObject);
  }
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
  update(_id , record){
    return this.schema.findByIdAndUpdate(_id , record , { new : true});
  }
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;