/* eslint-disable strict */
'use strict';

const express = require('express');

const product = require('../models/product/product-model.js');

const router = express.router();

//======================== PRODUCT ==========================//

router.get('/product' , getProduct);
router.post('/product' , postProduct);
router.put('/product' , updateProduct);
router.delete('/product' , deleteProduct);

////------------------- Product Req (function)---------------////

function getProduct(req , res , next) {
  product.get()
    .then( data =>{
      res.status(200).json(data);
    }).catch(next);
}

function postProduct(req , res , next) {
  product.create(req.body)
    .then(data =>{
      res.status(201).json(data);
    });
}

function updateProduct(req,res,next){
  product.update(req.params.id,req.body)
    .then(data=>{
      res.status(201).json(data);
    });
}

function deleteProduct(req,res,next){
  const message = 'item deleted';
  product.delete(req.params.id)
    .then(data=>{
      res.status(200).json({message});
    }).catch((err)=>console.error('error',err));
}


module.exports = router;