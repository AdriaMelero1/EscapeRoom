
document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();

	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	let tryUsername = localStorage.getItem('username', username);
	let tryPassword = localStorage.getItem('password', username);

});