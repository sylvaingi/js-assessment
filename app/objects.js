if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var res =[];
        for (var key in obj){
            if(obj.hasOwnProperty(key)){
                res.push(key+": "+obj[key]);
            }
        }
        return res;
    }
  };
});
