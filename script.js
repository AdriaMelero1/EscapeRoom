//CAPTURE BUTTONS
const btnPlayHangman = document.getElementById('btnPlayHangman');
const btnLoginPage = document.getElementById('btnLoginPage');
const btnRegisterPage = document.getElementById('btnRegisterPage');
const btnLogout = document.getElementById('btnLogout');
const btnProfile = document.getElementById('btnProfile');
const btnLogo = document.getElementById('logo');
const btnPlayTheF1Race = document.getElementById('btnPlaytheF1Race');
const btnPlaycyberpunkmission = document.getElementById('btnPlaycyberpunkmission');


//CAPTURE FIELDS
let fieldUsername = document.getElementById('username');
let fieldPassword = document.getElementById('password');
let fieldPassword2 = document.getElementById('password2');

//CAPTURE ELEMENTS
const message = document.getElementById('message');



//BUTTONS EVENT LISTENERS (redirections)
btnLoginPage.addEventListener('click', () => {
		window.location.href = '/pages/login.html';
});

btnRegisterPage.addEventListener('click', () => {
	window.location.href = '/pages/register.html';
});

btnPlayHangman.addEventListener('click', () => {
		window.location.href = 'thehangman/index.html';
});

btnLogout.addEventListener('click', () => {
	localStorage.removeItem('userLoggedIn');
	window.location.href = '../index.html';
});

btnProfile.addEventListener('click', () => {
	window.location.href = '/pages/profile.html';
});

btnLogo.addEventListener('click', () => {
	window.location.href = '../index.html';
});

btnPlayTheF1Race.addEventListener('click', () => {
	window.location.href = 'theF1Race/f1index.html';
});

btnPlaycyberpunkmission.addEventListener('click', () => {
	window.location.href = 'cyberpunkMission/index.html';
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



//Window on load event
window.addEventListener('load', () => {

	//show and hide some buttons depending if theres a user logged in
	if(localStorage.getItem('userLoggedIn')){
		btnLogout.style.display = 'true';
		btnPlayHangman.style.display = 'true';
		btnLoginPage.style.display = 'none';
		btnRegisterPage.style.display = 'none';
		btnProfile.style.display = 'true';
	} else {
		btnLogout.style.display = 'none';
		btnPlayHangman.style.display = 'true';
		btnLoginPage.style.display = 'true';
		btnRegisterPage.style.display = 'true';
		btnProfile.style.display = 'none';
	}

	//Try to get record from localstorage
	let record = localStorage.getItem("record");

	//If there's one, display it under the button
	if(record != null) {
		btnPlaycyberpunkmission.querySelector('h6').innerText = "Actual record: " + record + " tries";
	}
});

