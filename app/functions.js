if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arg1){
            return str+", "+arg1;
        };
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {
        return function(arg1){
            return fn.call(null,str1,str2,arg1);
        };
    },

    useArguments : function() {
        return _.reduce(arguments, function(memo,num){return memo+num;},0);
    },

    callIt : function(fn) {
        fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    curryIt : function(fn) {
        var curryArgs = Array.prototype.slice.call(arguments,1);
        return function(){
            return fn.apply(null, curryArgs.concat(Array.prototype.slice.call(arguments)));
        };
    }
};

});
