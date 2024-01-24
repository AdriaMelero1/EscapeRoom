
document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();

	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if (localStorage.getItem(username)) {
		let user = JSON.parse(localStorage.getItem(username));
		if (user[1] == password) {
			console.log('Login successful');
			localStorage.setItem('currentUser', username);
			window.location.href = 'index.html';
		} else {
			console.log('Incorrect password');
		}
	}
});