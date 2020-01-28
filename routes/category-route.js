/* eslint-disable strict */
'use strict';

const express = require('express');

const category = require('../models/category/category-model.js');

const router = express.router();

//=========================== CATEGORY ======================//
router.get('/category' , getCategory);
router.post('/category' , postCatergory);
// router.put('/category' , updateCategory);
// router.delete('/category' , deleteCategory);

////------------------- Category Req (function)---------------////

function getCategory(req , res , next) {
  category.get()
    .then( data =>{
      res.status(200).json(data);
    }).catch(next);
}

function postCatergory(req ,res , next) {
  category.create(req.body)
    .then( data =>{
      res.status(201).json(data);
    });
}

module.exports = router;
