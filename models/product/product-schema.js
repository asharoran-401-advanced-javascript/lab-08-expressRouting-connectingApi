/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  category: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, uppercase: true},
});

module.exports = mongoose.model('product', products);

