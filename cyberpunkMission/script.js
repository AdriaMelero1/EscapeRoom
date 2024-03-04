const container = document.querySelector('.container');
const error = document.querySelector('.error');
const good = document.querySelector('.good');
let tries = 0;

document.querySelector('button').addEventListener('click', function (e) {
	e.preventDefault();
	tries ++;

	let num = document.querySelector('input').value;

	if (num != 5) {
		container.style.display = 'none';
		error.style.display = 'block';
		if(num < 5){
			error.querySelector('h1').innerText = "More than " + num + " differences";
			error.querySelector('h3').innerText = tries + " tries";
		} else {
			error.querySelector('h1').innerText = "Less than " + num + " differences";
			error.querySelector('h3').innerText = tries + " tries";
		}
		document.querySelector('input').value = null;
		setTimeout(() => {
			container.style.display = 'flex';
			error.style.display = 'none';
			error.querySelector('h1').innerText = "";
			error.querySelector('h3').innerText = "";
		}, 3000);
	} else {

		container.style.display = 'none';
		good.style.display = 'block';
		document.querySelector('input').value = null;
		sessionStorage.setItem("tries", tries);
		setTimeout(() => {
			window.location.href = "../cyberpunkMission/guessNumber/index.html";
		}, 2000);
	}
});