var pomeloClient = require('./lib/clientforserver');
//显示对象方法
console.log(pomeloClient);
/*pomeloClient
init: [Function], 初始化联接
initWebSocket: [Function],初始化联接
disconnect: [Function],关闭联接
request: [Function],请求服务 有回复
notify: [Function] }通知服务 无回复
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
	pomeloClient.request('chat.entryHandler.entry', "请帮我把杯子递给我", function(data) {
		console.log("111111:"+data);
		//通知
		pomeloClient.notify('chat.entryHandler.entry', "我要干活了", function(data) {
			console.log("===="+data);
		});
		//关闭联接
		//pomeloClient.disconnect();
	});
});
