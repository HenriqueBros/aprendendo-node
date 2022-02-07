var fib = function(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

var Obj = function() { };

Obj.prototype.doSomething = function(arq1_) {
  var callback_ = arguments[arguments.length - 1];
  callback = (typeof(callback_) == 'function' ? callback_ : null);
  var arq1 = typeof arq1_ === 'number' ? arq1_ : null;
  if(!arq1)
    return callback(new Error('first arq missing or not a number'));

    process.nextTick(function() {
      var data = fib(arq1);
      callback(null, data);
    });
}

var test = new Obj();
var number = 10;

test.doSomething(number, function(err, value) {
  if(err)
    console.log(err);
  else
    console.log('fibonaci value for %d is %d', number, value);
});

console.log('called doSomething');
