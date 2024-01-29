//CAPTURE BUTTONS
const btnRegister = document.querySelector('button');



btnRegister.addEventListener('click', (e) => {
	e.preventDefault();

	let user = [fieldUsername.value, fieldPassword.value];

	let allFieldsCorrect = (isMandatory([fieldUsername, fieldPassword, fieldPassword2])) && 
	checkLength(fieldUsername, 3, 15) && checkLength(fieldPassword, 5, 10) 
	&& checkPasswordsAreEqual(fieldPassword, fieldPassword2);


	// Check if user already exists
	if (localStorage.getItem(user[0]) || fieldUsername.value == 'userLoggedIn') {
		message.innerHTML = 'User already exists';
	} else if(allFieldsCorrect){
		localStorage.setItem(user[0], JSON.stringify(user));
		console.log('User registered successfully');
		localStorage.setItem('userLoggedIn', user[0]);
		window.location.href = '../index.html';	
	}
});


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

function checkLength(input, min, max) {
	
	if(input.value.length < min){
			displayError(input, `${takeInputName(input)} must have at least ${min} characters`); 
			return false;   
	} else if(input.value.length > max){
			displayError(input, `${takeInputName(input)} must have less than ${max} characters`);    
			return false;   
	} else {
			displayCorrect(input);
			return true;
	}
}

function checkPasswordsAreEqual(input1, input2){

	if(input1.value != input2.value){
			let message = takeInputName(input2) + " Must be equal to " + takeInputName(input1);
			displayError(input2, message)
			return false;
	} else {
			displayCorrect(input2);
			return true;
	}
}

function displayError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const label = formControl.querySelector('label');
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function displayCorrect(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control correct';
}

function takeInputName(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
