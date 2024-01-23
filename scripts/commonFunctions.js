//CAPTURE BUTTONS
const btnBack = document.getElementById('btnBack');


//CAPTURE FIELDS
let fieldUsername = document.getElementById('username');
let fieldPassword = document.getElementById('password');



//CAPTURE SHOW PASSWORD CHECKBOXES AND FUNCTION
const btnShowPassword = document.getElementById('btnShowPassword');
btnShowPassword.addEventListener('change', (e) => {
	if (e.target.checked) {
		fieldPassword.type = 'text';
	} else {
		fieldPassword.type = 'password';
	}
});

//BUTTONS ACTIONS LISTENERS
btnBack.addEventListener('click', () => {
	window.location.href = '../index.html';
});