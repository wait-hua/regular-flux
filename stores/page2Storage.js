var Regular = require('regularjs/dist/regular.min.js');
var AppDispatcher = require('../dispatcher/dispatcher');


var instance;
var Store2 = Regular.extend({
    data: [],
    getInitData: function(url){
        var that = this;
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', url, true);
        xhr.onload = function(){
            var txt = xhr.responseText;
            // debugger;
            
            that.data = JSON.parse(txt).data;
            that.emitDone();
        }
        xhr.send();
    },
    getAll: function(){
        return this.data;
    },
    emitDone: function(){
        this.$emit('done');
    },
    addListener: function(callback){
        this.$on('done', callback);
    },
    deleteItem: function(id) {
        this.data.splice(id, 1);
        // 数据操作完之后，通知更新view, 回掉函数的方法
        this.emitDelete();
    },
    emitDelete: function(){
        this.$emit('delete');
    },
    addListenerDelete: function(callback){
        // debugger
        this.$on('delete', callback);
    }
});

instance = new Store2();
AppDispatcher.register(function(action){
    switch(action.actionName){
        case 'GET_INIT_DATA':
            // 注册事件的行为
            instance.getInitData(action.data.url);
            break;
        case 'DELETE_ITEM':
            instance.deleteItem(action.id);
            break;
        default:
            break;
    }
});


module.exports = instance;