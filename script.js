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

