var should = require('chai').should(); 

describe('Array', function() {

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  })

  describe('#length', function () {
  	it('should return the number of items in array', function () {
  		[1,2,3,4].length.should.equal(4);
  		[1,2].length.should.equal(2);
  	});
  });

})