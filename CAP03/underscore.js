var us = require('underscore');

us.mixin({
  betterWithNode: function(str) {
    return str + ' better with Node';
  }
});

console.log(us.betterWithNode('Chocolate'));