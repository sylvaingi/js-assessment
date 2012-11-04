if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided

      if (num % 3 === 0){
        if(num % 5 === 0){
          return 'fizzbuzz';
        }
        return 'fizz';
      }
      else if (num % 5 === 0){
        return 'buzz';
      }
      else{
        return num;
      }
    }
  };
});
