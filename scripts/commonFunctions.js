//CAPTURE ELEMENTS
const message = document.getElementById('message');

const btnBack = document.getElementById('btnBack');


//CAPTURE FIELDS
let fieldUsername = document.getElementById('username');
let fieldPassword = document.getElementById('password');
let fieldPassword2 = document.getElementById('password2');



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


//FORM VALIDATIONS
//Display error message
function displayError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const label = formControl.querySelector('label');
	const small = formControl.querySelector('small');
	small.innerText = message;
	console.log("Displaying error..." + input + " " + message);
}

//Display correct message
function displayCorrect(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control correct';
}

//Function to take input name and capitalize first letter
function takeInputName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Function to check mandatory fields are not empty
function isMandatory(inputArray) {
	
	let result = true;
	inputArray.forEach((input) => {
			if(input.value.trim() === ''){
					displayError(input, `${takeInputName(input)} It s Mandatory`);
					result = false;					
			} else {
					displayCorrect(input);
			}
	});
	return result;
}