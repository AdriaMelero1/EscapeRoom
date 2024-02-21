const btnRegister = document.getElementById('btnRegister');
const btnShowPassword = document.getElementById('btnShowPassword');

//Check if there is a user logged in. If not, redirect to index.html
let user = [];

window.addEventListener('load', () => {
	if (localStorage.getItem('userLoggedIn')) {
		user = JSON.parse(localStorage.getItem(localStorage.getItem('userLoggedIn')));
		document.getElementById('btnPlayHangman').style.display = 'none';
		document.getElementById('btnRegisterPage').style.display = 'none';
		document.getElementById('btnLoginPage').style.display = 'none';
		document.getElementById('btnProfile').style.display = 'none';
		
	} else {
		window.location.href = '../index.html';
	}
});

setTimeout(() => {
	fieldUsername.value = user[0];
	fieldPassword.value = user[1];
	fieldPassword2.value = user[1];
}, 500);


btnShowPassword.addEventListener('change', (e) => {
	if (e.target.checked) {
		fieldPassword.type = 'text';
	} else {
		fieldPassword.type = 'password';
	}
});


//Event listener for button register
btnRegister.addEventListener('click', (e) => {
	e.preventDefault();


	//Create user array
	newUser = [fieldUsername.value, fieldPassword.value];

	//Check if all fields are correct (form validation) --> is mandatory, check length, check passwords are equal
	let allFieldsCorrect = (isMandatory([fieldUsername, fieldPassword, fieldPassword2])) &&
		checkLength(fieldUsername, 3, 15) && checkLength(fieldPassword, 5, 10)
		&& checkPasswordsAreEqual(fieldPassword, fieldPassword2);


	// Check if user already exists and user name is not 'userLoggedIn'
	if (localStorage.getItem(newUser[0]) || fieldUsername.value == 'userLoggedIn') {
		message.innerHTML = 'User already exists';

		//if all fields are correct, register user, add logged in user and redirect to index.html
	} else if (allFieldsCorrect) {
		localStorage.removeItem(user[0]);
		localStorage.setItem(newUser[0], JSON.stringify(newUser));
		localStorage.setItem('userLoggedIn', newUser[0]);
		setTimeout(() => window.location.href = '../pages/profile.html', 500);
	} else {
		isMandatory([fieldUsername, fieldPassword, fieldPassword2])
	}

	checkLength(fieldUsername, 3, 15);
	checkLength(fieldPassword, 5, 10);
	if (fieldPassword.value != '') {
		checkPasswordsAreEqual(fieldPassword, fieldPassword2);
	}
});


//Function to check length of input with min and max values
function checkLength(input, min, max) {

	if (input.value.length < min) {
		displayError(input, `${takeInputName(input)} must have at least ${min} characters`);
		return false;
	} else if (input.value.length > max) {
		displayError(input, `${takeInputName(input)} must have less than ${max} characters`);
		return false;
	} else {
		displayCorrect(input);
		return true;
	}
}

//Function to check if passwords are equal
function checkPasswordsAreEqual(input1, input2) {

	if (input1.value != input2.value) {
		let message = takeInputName(input2) + " Must be equal to " + takeInputName(input1);
		displayError(input2, message)
		return false;
	} else {
		displayCorrect(input2);
		return true;
	}
}


document.getElementById('btnDelete').addEventListener('click', () => {
	localStorage.removeItem(user[0]);
	localStorage.removeItem('userLoggedIn');
	window.location.href = '../index.html';
});