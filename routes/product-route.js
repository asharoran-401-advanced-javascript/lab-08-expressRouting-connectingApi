/* eslint-disable strict */
'use strict';

const express = require('express');

const product = require('../models/product/product-model.js');

const router = express.router();

//======================== PRODUCT ==========================//

router.get('/api/v1/products' , getProduct);
router.post('/api/v1/products' , postProduct);
router.put('/api/v1/products' , updateProduct);
router.delete('/api/v1/products' , deleteProduct);

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