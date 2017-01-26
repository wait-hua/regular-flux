var Regular = require('regularjs/dist/regular.min.js');
var AppDispatcher = require('../dispatcher/dispatcher');
var instance;
var Store = Regular.extend({
    items: [],
    getAll: function(){
        return this.items;
    },
    addNewItem: function(){
        this.items.push("helloworld");

        this.emitChange();
    },
    emitChange: function(){
        // debugger;
        this.$emit('add');
    },
    addListener: function(callback){
        // debugger
        this.$on('add', callback);
    },
    removeListener: function(){
        
    }
});
instance = new Store();
AppDispatcher.register(function(action){
    switch(action.actionName){
        case 'ADD_ITEM':
            // 注册事件的行为
            instance.addNewItem();
            break;
        default:
            break;
    }
});
module.exports = instance;