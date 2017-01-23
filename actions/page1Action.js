var AppDispatcher = require('../dispatcher/dispatcher');

var Action = {
    addItem: function (data) {
        AppDispatcher.dispatch({
            actionName: 'ADD_ITEM',
            msg: data
        })
    }
};

module.exports = Action;