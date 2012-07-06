if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        return {
            name : "la",
            greeting: "grrr",
            sayIt: function(){
                return str1+", "+str2;
            }
        }
    }
  };
});

