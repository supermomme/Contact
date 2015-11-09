var socket = io();
socket.on('config', function(msg){
	socket.config = msg;
	console.log(socket.config)
	if (msg.selection.input.firstname) {
		$('#firstnameDiv').text("")
		$('#firstnameDiv').append('<div class="form-group"><label for="firstname">Firstname</label><input type="text" class="form-control" id="firstname" placeholder="Firstname"></div>');
	};
	if (msg.selection.input.lastname) {
		$('#lastnameDiv').text("")
		$('#lastnameDiv').append('<div class="form-group"><label for="lastname">Lastname</label><input type="text" class="form-control" id="lastname" placeholder="Lastname"></div>');
	};
	if (msg.selection.input.email) {
		$('#emailDiv').text("")
		$('#emailDiv').append('<div class="form-group"><label for="email">Email</label><input type="text" class="form-control" id="email" placeholder="Email"></div>');
	};
	$('#contact').submit(function(){
/*	var message = '{"firstname":"'+$('#firstname').val()+'",
		"lastname":"'+$('#lastname').val()+'",
	 	"email":"'+$('#email').val()+'",
	 	"text":"'+$('#text').val()+'"}';*/
	 	var message = {}
	 	if (msg.selection.input.firstname) {
	 		message.firstname = $('#firstname').val();
	 	};
	 	if (msg.selection.input.lastname) {
	 		message.lastname = $('#lastname').val();
	 	};
	 	if (msg.selection.input.email) {
	 		message.email = $('#email').val();
	 	};
	 	message.text = $('#text').val();
		console.log(message)
		socket.emit('message', message);
		return false;
	});
});