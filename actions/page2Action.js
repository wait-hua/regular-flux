var AppDispatcher = require('../dispatcher/dispatcher');
var Action = {
    getInitData: function(data){
        AppDispatcher.dispatch({
            actionName: 'GET_INIT_DATA',
            data: data
        });
    },
    deleteItem: function(id){
        AppDispatcher.dispatch({
            actionName: 'DELETE_ITEM',
            id: id
        })
    }
};

module.exports = Action;