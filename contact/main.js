var socket = io();
socket.on('config', function(config){
	console.log(config)
	if (config.selection.input.firstname) {
		$('#firstnameDiv').text("")
		$('#firstnameDiv').append('<div class="form-group"><label for="firstname">Firstname</label><input type="text" class="form-control" id="firstname" placeholder="Firstname"></div>');
	};
	if (config.selection.input.lastname) {
		$('#lastnameDiv').text("")
		$('#lastnameDiv').append('<div class="form-group"><label for="lastname">Lastname</label><input type="text" class="form-control" id="lastname" placeholder="Lastname"></div>');
	};
	if (config.selection.input.email) {
		$('#emailDiv').text("")
		$('#emailDiv').append('<div class="form-group"><label for="email">Email</label><input type="text" class="form-control" id="email" placeholder="Email"></div>');
	};


	$('#contact').submit(function(){
	 	var message = {}
	 	if (config.selection.input.firstname) {
	 		message.firstname = $('#firstname').val();
	 	};
	 	if (config.selection.input.lastname) {
	 		message.lastname = $('#lastname').val();
	 	};
	 	if (config.selection.input.email) {
	 		message.email = $('#email').val();
	 	};
	 	message.text = $('#text').val();
		console.log(message)
		socket.emit('message', message);
		return false;
	});
});