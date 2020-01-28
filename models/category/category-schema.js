/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('category', category);



