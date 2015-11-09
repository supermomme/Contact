var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var TelegramBot = require('node-telegram-bot-api');

app.use('/contactOverTelegram/', express.static(__dirname + '/contact'));

var config = JSON.parse(fs.readFileSync('./config.json').toString());
var token = config.output.telegramToken;
var bot = new TelegramBot(token, {polling: true});


io.on('connection', function(socket){
	io.emit('config', config);
	socket.on('message', function(msg){
		console.log(msg)
		var message = "";
		if (msg.firstname) {
			message = message+"Firstname: "+msg.firstname+"\n\n";
		};
		if (msg.lastname) {
			message = message+"Lastname: "+msg.lastname+"\n\n";
		};
		if (msg.email) {
			message = message+"Email: "+msg.email+"\n\n";
		};
		message = message+"Message: "+msg.text+"\n";
		bot.sendMessage(config.output.chatId, message);
	});
});


http.listen(3000, function(){
	console.log('ContactServer on *:3000');
});
 
