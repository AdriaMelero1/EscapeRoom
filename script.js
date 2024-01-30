//CAPTURE BUTTONS
const btnPlayHangman = document.getElementById('btnPlayHangman');
const btnLoginPage = document.getElementById('btnLoginPage');
const btnRegisterPage = document.getElementById('btnRegisterPage');
const btnLogout = document.getElementById('btnLogout');
const btnProfile = document.getElementById('btnProfile');



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

btnProfile.addEventListener('click', () => {
	window.location.href = 'pages/profile.html';
});


window.addEventListener('load', () => {

	if(localStorage.getItem('userLoggedIn')){
		btnLogout.style.display = 'true';
		btnPlayHangman.style.display = 'true';
		btnLoginPage.style.display = 'none';
		btnRegisterPage.style.display = 'none';
		console.log("Welcome " + localStorage.getItem('userLoggedIn'));
	} else {
		btnLogout.style.display = 'none';
		btnPlayHangman.style.display = 'none';
		btnLoginPage.style.display = 'true';
		btnRegisterPage.style.display = 'true';
	}
});