/* eslint-disable strict */
'use strict';

const express = require('express');

const category = require('../models/category/category-model.js');

const router = express.router();

//=========================== CATEGORY ======================//
router.get('/api/v1/categories' , getCategory);
router.post('/api/v1/categories' , postCatergory);
router.put('/api/v1/categories' , updateCategory);
router.delete('/api/v1/categories' , deleteCategorie);

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

function updateCategory(req,res,next){
  category.update(req.params.id,req.body)
    .then(data=>{
      res.status(201).json(data);
    });
}

function deleteCategorie(req,res,next){
  const message = 'item deleted';
  category.delete(req.params.id)
    .then(data=>{
      res.status(200).json({message});
    }).catch((err)=>console.error('error',err));
}
module.exports = router;
