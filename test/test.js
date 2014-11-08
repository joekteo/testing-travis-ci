var expect = require('chai').expect;
var CounterObject = require('../public/count');

describe('Testing Counter Object', function() {
  it('should begin with a count of 0', function(done) {
    var count1 = new CounterObject();
    expect(count1.count).to.eql(0);
    done();
  });
  it('should increment the counter when called increment()', function(done) {
    var count1 = new CounterObject();
    count1.increment();
    expect(count1.count).to.eql(1);
    done();
  });
  it('should return the current counter', function(done) {
    var count1 = new CounterObject();
    count1.increment();
    count1.increment();
    count1.increment();
    expect(count1.getValue()).to.eql(3);
    done();
  });
});