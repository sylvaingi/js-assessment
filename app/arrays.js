if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return _.indexOf(arr, item);
    },

    sum : function(arr) {
        return _.reduce(arr, function(memo, num){ return memo + num; }, 0);
    },

    remove : function(arr, item) {
        return _.reject(arr,function(i){
            return i === item;
        });
    },
    
    removeWithoutCopy : function(arr, item) {
        var idx = -1;
        while((idx = _.indexOf(arr, item)) !== -1){
            arr.splice(idx, 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop(arr.length - 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        return _.filter(arr, function(val){ return val === item;}).length;
    },

    duplicates : function(arr) {
        var count = {};
        _.each(arr, function(item){
            count[item] = count[item]!==undefined ? count[item]+1 : 1;
        });
        var duplicates = [];
        _.each(count, function(val,key){
            val > 1 && duplicates.push(key);
        });

        return duplicates;
    },

    square : function(arr) {
        return _.map(arr, function(item){return item*item;});
    },

    findAllOccurrences : function(arr, target) {
        var regex=new RegExp(target+"", "g"),
            str = arr.join(""),
            result,
            idx = [];

        while ((result = regex.exec(str))) {
            idx.push(result.index);
        }
        
        return idx;
    }
  };
});
