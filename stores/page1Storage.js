var Regular = require('regularjs/dist/regular.min.js');
var instance;
var Store = Regular.extend({
    items: [],
    addNewItem: function(){
        this.items.push("nihao");

    },
    emitChange: function(){
        this.$emit('add');
    },
    addListener: function(callback){
        this.$on('add', callback);
    },
    removeListener: function(){
        
    }
});
instance = new Store();
module.exports = instance;