var base = 2;

exports.addtwo = function addtwo(input) {
  return parseInt(input) + base;
}

var addtwo = require('./addtwo').addtwo;

base = 10;

console.log(addtwo(base));