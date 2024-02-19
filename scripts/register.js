//Check if there is a user logged in. If so, redirect to index.html
window.addEventListener('load', () => {
	if (localStorage.getItem('userLoggedIn')) {
		window.location.href = '../index.html';
	} else {
		document.getElementsByClassName('btnsUser')[0].style.display = 'none';
		document.getElementById('btnPlayHangman').style.display = 'none';
	}
});

//CAPTURE BUTTONS
const btnRegister = document.getElementById('btnRegister');
const btnShowPassword = document.getElementById('btnShowPassword');

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
	let user = [fieldUsername.value, fieldPassword.value];

	//Check if all fields are correct (form validation) --> is mandatory, check length, check passwords are equal
	let allFieldsCorrect = (isMandatory([fieldUsername, fieldPassword, fieldPassword2])) &&
		checkLength(fieldUsername, 3, 15) && checkLength(fieldPassword, 5, 10)
		&& checkPasswordsAreEqual(fieldPassword, fieldPassword2);

	console.log(allFieldsCorrect);


	// Check if user already exists and user name is not 'userLoggedIn'
	if (localStorage.getItem(user[0]) || fieldUsername.value == 'userLoggedIn') {
		message.innerHTML = 'User already exists';

		//if all fields are correct, register user, add logged in user and redirect to index.html
	} else if (allFieldsCorrect) {
		localStorage.setItem(user[0], JSON.stringify(user));
		localStorage.setItem('userLoggedIn', user[0]);
		setTimeout(() => window.location.href = '../index.html', 500);
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





