var pomeloClient = require('./lib/clientforserver');
//显示对象方法
console.log(pomeloClient);
/*pomeloClient
init: [Function],
initWebSocket: [Function],
disconnect: [Function],
request: [Function],
notify: [Function] }
*/


var params ={
	host:"127.0.0.1", 
	port: 3010, 
	log: true
	};

//初始化对像
pomeloClient.init(params,function(err){
	console.log(err._events.open);
	//发送数据
	pomeloClient.request('chat.entryHandler.entry', "dddddddddd", function(data) {
		console.log("111111:"+data);
		//通知
		pomeloClient.notify('chat.entryHandler.entry', "dddddddddd", function(data) {
			console.log("===="+data);
		});
		//关闭联接
		//pomeloClient.disconnect();
	});
});
