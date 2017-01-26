// mock测试
function createList(){
	var data = [];
	for(var i=0; i<10; i++){
		var temp = {};
		temp.id = i;
		temp.name = '趣多多' + i;
		temp.mail = '*******12'+ i + '@corp.netease.com';
		data.push(temp);
	}
	return data;
}
var apiMap = {
	GET: {
		"/modify/resetPwd/":{"state":"200"},
		"/cdl/cdallcookie":{"ret":"201"},
		"/userInfo":{"state":"success","data":createList()},
        '/getDates':{"data":["one","two","three","four","five"]}
	},
	POST: {
	
	},
	DELETE:{},
	PUT:{}
};

function routeMap(){
	var str = {};
	Object.keys(apiMap).forEach(function(method){
		// var api = apiMap[method];
		Object.keys(apiMap[method]).forEach(function(url){
			var key = "" + method + " " + url;
			str[key] = function(req, res, next){
				res.send(apiMap[method][url]);
			}
		});
	});
	// console.log(str);
	return str;
}

module.exports = routeMap();