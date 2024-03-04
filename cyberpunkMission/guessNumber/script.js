let number = document.querySelector('input');

let focused = false;
let secretNumber;
let tries = sessionStorage.getItem("tries");

window.onload = function () {

	secretNumber = number.value = Math.floor(Math.random() * 100) + 1;

	randomNumbers = setInterval(() => {
		number.value = Math.floor(Math.random() * 100) + 1;
	}, 100);

};

number.addEventListener("focus", () => {

	clearInterval(randomNumbers);
	number.value = null;

	focused = true;
});


document.querySelector('button').addEventListener('click', (e) => {

	tries++;
	console.log(tries);
	document.querySelector('.lower').style.display = 'none';
	document.querySelector('.higher').style.display = 'none';

	e.preventDefault();


	if (focused && number.value == secretNumber) {
		document.querySelector('.container').style.display = "none";
		document.querySelector('.good').style.display = "block";
		document.querySelector('.good').querySelector('span').innerText = tries;
		let record = localStorage.getItem("record");
		if (!record || tries < record) {
			localStorage.setItem("record", tries);
		}
		sessionStorage.setItem("tries", 0);
		setTimeout(() => {
			window.location.href = "/index.html";
		}, 3000);
	} else if (number.value < secretNumber) {
		document.querySelector('.higher').style.display = 'block';
		document.querySelector('.higher').querySelector('span').innerText = number.value;

	} else {
		document.querySelector('.lower').style.display = 'block';
		document.querySelector('.lower').querySelector('span').innerText = number.value;

	}
	number.value = null;


});