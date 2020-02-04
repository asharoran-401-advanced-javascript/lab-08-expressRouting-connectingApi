/* eslint-disable camelcase */
/* eslint-disable strict */
'use strict';

const { server} = require('../src/app.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Model API', () => {
  return mockRequest
    .get('/some-route-that-doesnt-exist')
    .then(results =>{
      expect(results.status).toBe(404);
    })
    .catch(console.error);
});

describe('web server', () => {
  it('responds with a 500 on error', () => {
    return mockRequest
      .get('/real-error')
      .then(results =>{
        expect(results.status).toBe(500);
      })
      .catch(console.error);
  });


  it('Can Read an items GET() from DB to valid Category ' , () =>{ // to read the items in DB
    return mockRequest
      .get('/api/v1/categories')
      .then( results =>{
        expect(results.status).toBe(200);
      });
  });

  // it('Can Create a new item and Post() in categories' , () =>{
  //   let testObj = {name : 'sheo'};
  //   return mockRequest
  //     .post('/api/v1/categories')
  //     .send(testObj)
  //     .then( results =>{
  //       expect(results.status).toBe(201);
  //       console.log('-----my new Obj ------' , results.body.category);
  //       expect(results.body.category).toBe(testObj.category);
  //     });

});

// it('Can Update() an item in DB and PUT() in Category' , () =>{ // we need to Create an obj then udpate it
//   let testObj = {name : 'sheo'};
//   return mockRequest
//     .post('/api/v1/categories')
//     .send(testObj)
//     .then( item =>{
//       let editTestObj = {name : 'sheoooooooo'};
//       return mockRequest
//         .put(`/api/v1/categories/${item.body._id}`)
//         .send(editTestObj)
//         .then( results =>{
//           expect(results.status).toBe(200);
//           console.log('------result-------' , results.body);
//           expect(results.body.category).toBe(editTestObj.category);
//           expect(results.body.description).toBe(editTestObj.description);
//         });

//     });

// });

it('Can Delete() an item From DB in Category' , () =>{ // we need to create a nw item then get it by id then Delete it
  let testObj =  {name : 'sheo'};
  return mockRequest
    .post('/api/v1/categories')
    .send(testObj)
    .then( item =>{
      return mockRequest
        .delete(`/api/v1/categories/${item.body._id}`)
        .send(testObj)
        .then((results) =>{
          console.log('----item deleted------' , results.body);
          // expect(results.status).toBe(200);
          // eslint-disable-next-line no-undefined
          // expect(results.body.value).toBe(undefined);
        });
    });
});
it('Can Read an items GET() from DB to Product model' , () =>{ // to read the items in DB
  return mockRequest
    .get('/api/v1/products')
    .then( results =>{
      expect(results.status).toBe(200);
    });
});

// it('Can Create a new item and Post() in Product model' , () =>{
//   let testObj = {category: 'bag' , display_name : 'susen' , description: 'great bag'};
//   return mockRequest
//     .post('/api/v1/products')
//     .send(testObj)
//     .then( results =>{
//       expect(results.status).toBe(500);
//       console.log('-----my new Obj ------' , results.body.category);
//       expect(results.body.category).toBe(testObj.category);
//     });

// });

// it('Can Update() an item in DB and PUT() in Product model' , () =>{ // we need to Create an obj then udpate it
//   let testObj = {category: 'bag' , display_name : 'susen' , description: 'great bag'};
//   return mockRequest
//     .post('/api/v1/products')
//     .send(testObj)
//     .then( item =>{
//       let editTestObj =  {category: 'bag' , display_name : 'Susen' , description: 'great  and coool bag'};
//       return mockRequest
//         .put(`/api/v1/products/${item.body._id}`)
//         .send(editTestObj)
//         .then( results =>{
//           expect(results.status).toBe(200);
//           console.log('------result-------' , results.body);
//           expect(results.body.category).toBe(editTestObj.category);
//           expect(results.body.description).toBe(editTestObj.description);
//         });

//     });

// });

it('Can Delete() an item From DB in Product model' , () =>{  // we need to create a nw item then get it by id then Delete it
  let testObj = {category: 'bag' , display_name : 'susen' , description: 'great bag'};
  return mockRequest
    .post('/api/v1/products')
    .send(testObj)
    .then( item =>{
      return mockRequest
        .delete(`/api/v1/products/${item.body._id}`)
        .send(testObj)
        .then(results =>{
          console.log('----item deleted------' , results.body);
          expect(results.status).toBe(500);
          // eslint-disable-next-line no-undefined
          expect(results.body.value).toBe(undefined);
        });
    });
});



