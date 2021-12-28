

function SendEmail() {

	Email.send({
		SecureToken : "c922d84b-a41b-416f-ac8a-e240c2f32919",
		To : 'kaushalendra7361@gmail.com',
		From : "document.getElementById("email").value ,
		Subject : "Email Form",
		Body : "Name: " + document.getElementById('name').value
				+ "<br> Email: " + document.getElementById('Email').value
				+ "<br> Subject: " + document.getElementById('subject').value
				+ "<br> Message: " + document.getElementById('message').value
	}).then(
		message => alert("Message Sent Sucessfully")
	);
}