define(function() {
  return {
    async : function() {
        var deferred = $.Deferred();
        _.defer(function(){
            deferred.resolve(true);
        });
        return deferred;
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred();
        $.getJSON(url, function(data){
            deferred.resolve(_.pluck(data.people, 'name').sort());
        });
        return deferred;
    }
  };
});
