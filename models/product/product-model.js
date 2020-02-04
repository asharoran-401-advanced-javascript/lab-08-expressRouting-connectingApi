/* eslint-disable strict */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const schema = require('../product/product-schema.js');
const Model = require('../mongo.js');

class Products extends Model{
  constructor(){
    super(schema);
  }
}

module.exports =  new Products;