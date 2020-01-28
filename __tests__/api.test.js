/* eslint-disable strict */
'use strict';

const { server} = require('../src/app.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Model API', () => {
  it('post a new category item', () => {
    let testObj = { name: 'test Item'};
    return mockRequest.post('/api/v1/products')
      .send(testObj)
      .then(data => {
        console.log('***********', data.body);
        let record = data.body;
        Object.keys(testObj).forEach(key => {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
// it('can get a food item', () => {
// });
});


