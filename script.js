//CAPTURE BUTTONS
const btnPlayHangman = document.getElementById('btnPlayHangman');
const btnLoginPage = document.getElementById('btnLoginPage');
const btnRegisterPage = document.getElementById('btnRegisterPage');
const btnLogout = document.getElementById('btnLogout');



//BUTTONS EVENT LISTENERS
btnLoginPage.addEventListener('click', () => {
		window.location.href = 'pages/login.html';
});

btnRegisterPage.addEventListener('click', () => {
	window.location.href = 'pages/register.html';
});

btnPlayHangman.addEventListener('click', () => {
		window.location.href = 'thehangman/index.html';
});

btnLogout.addEventListener('click', () => {
	localStorage.removeItem('userLoggedIn');
	window.location.href = '../index.html';
});


window.addEventListener('load', () => {

	if(localStorage.getItem('userLoggedIn')){
		btnLogout.style.display = 'true';
		console.log("Welcome " + localStorage.getItem('userLoggedIn'));
	} else {
		btnLogout.style.display = 'none';
	}
});