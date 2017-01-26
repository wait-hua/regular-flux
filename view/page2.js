var Regular = require('regularjs/dist/regular.min.js');
var tpl = require('./page2.html');
var Page2Action = require('../actions/page2Action');
var Page2Store = require('../stores/page2Storage');

var Page2 = Regular.extend({
    template: tpl,
    data:{
        arr:[]
    },
    init: function(){
        // 异步获取数据
        Page2Action.getInitData({"url":'/getDates'});

        // 传递给store数据更新之后的回调函数，更新页面
        Page2Store.addListener(this._getData.bind(this));

        // 传递给store数据删除时的回调函数
        Page2Store.addListenerDelete(this._getData.bind(this));
    },
    _getData: function(){
        this.data.arr = Page2Store.getAll();
        this.$update();
    },
    delete: function(id){
        Page2Action.deleteItem(id);
    }
});

module.exports = Page2;