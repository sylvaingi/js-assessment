if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(flag) {
        var deferred = $.Deferred();
        _.defer(function(){
            deferred.resolve(flag);
        });
        return deferred.promise();
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred();
        $.getJSON(url, function(data){
            deferred.resolve(_.pluck(data.people, 'name').sort());
        });
        return deferred.promise();
    }
  };
});
