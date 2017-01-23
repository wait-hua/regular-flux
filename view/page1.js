var Regular = require('regularjs/dist/regular.min.js');
var tpl = require("./page1.html");
var PageAction = require('../actions/page1Action');
var Page1 = Regular.extend({
    template: tpl,
    data: {
        items:[]
    },
    addItem: function(){
        // 触发action发送事件
        PageAction.addItem();
    }
});

module.exports = Page1;