//Check if there is a user logged in. If so, redirect to index.html
window.addEventListener('load', () => {
	if(localStorage.getItem('userLoggedIn')){
		window.location.href = '../index.html';
	}
});

const btnShowPassword = document.getElementById('btnShowPassword');


btnShowPassword.addEventListener('change', (e) => {
	if (e.target.checked) {
		fieldPassword.type = 'text';
	} else {
		fieldPassword.type = 'password';
	}
});


//Event listener for button login
document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	
	//Capture fields
	let username = fieldUsername.value;
	let password = fieldPassword.value;
	
	//Check fields are not empty
	isMandatory([fieldUsername, fieldPassword]);

	//Check if user exists
	if (localStorage.getItem(username)) {

		//Capture user from local storage into User array
		let user = JSON.parse(localStorage.getItem(username));

		//Compare if password is correct
		if (user[1] == password) {
			//if its correct, add userLoggedIn to localstorage, wait and redirect to index.html
			localStorage.setItem('userLoggedIn', username);
			setTimeout(() => window.location.href = '../index.html', 500);
			//If password is incorrect, display error
		} else if (!fieldPassword.value == ''){
			displayError(fieldPassword, 'Incorrect Password');
		}
		//If user does not exist, display error
	} else if (!fieldUsername.value == '') {
		displayError(fieldUsername, 'User does not exist');
	}
});