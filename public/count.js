var CounterObject = function() {
  this.count = 0;
};

CounterObject.prototype.increment = function() {
  this.count++;
};

CounterObject.prototype.getValue = function() {
  console.log(this.count);
  return this.count;
};

module.exports = CounterObject;
