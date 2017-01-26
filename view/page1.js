var Regular = require('regularjs/dist/regular.min.js');
var tpl = require("./page1.html");
var PageAction = require('../actions/page1Action');
var PageStore = require('../stores/page1Storage');
var Page1 = Regular.extend({
    template: tpl,
    data: {
        items:['abc']
    },
    init: function(){
        PageStore.addListener(this._updateView.bind(this));
    },
    addItem: function(){
        // 触发action发送事件
        PageAction.addItem();
    },
    _updateView: function(){
        // debugger
        var _tmp = PageStore.getAll();
        this.data.items = _tmp;
        this.$update();
    }
});

module.exports = Page1;