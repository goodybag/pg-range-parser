var assert  = require('assert');
var pgdaterange = require('../');

describe('Pg Daterange', function(){
  it('.parse(str)', function(){
    assert.deepEqual( pgdaterange.parse('[2015-01-01,2015-02-01)'), {
      start:  { value: '2015-01-01', inclusive: true }
    , end:    { value: '2015-02-01', inclusive: false }
    });
  });

  it('.serialize(obj)', function(){
    assert.equal( pgdaterange.serialize({
      start:  { value: '2015-01-01', inclusive: true }
    , end:    { value: '2015-02-01', inclusive: false }
    }), '[2015-01-01,2015-02-01)' );
  });
});