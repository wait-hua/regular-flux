var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var Page1Store = require('../stores/page1Storage');

AppDispatcher.register(function(action){
    switch(action.actionName){
        case 'ADD_ITEM':
            // 注册事件的行为
            Page1Store.addNewItem();
            break;
        default:
            break;
    }
});
module.exports = AppDispatcher;

