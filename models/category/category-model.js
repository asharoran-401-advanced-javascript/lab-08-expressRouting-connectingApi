/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const schema = require('./category-schema.js');
const Model = require('../mongo.js');

class Categories extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = new Categories();