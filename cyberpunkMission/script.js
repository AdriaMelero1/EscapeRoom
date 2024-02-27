const container = document.querySelector('.container');
const error = document.querySelector('.error');
const good = document.querySelector('.good');

document.querySelector('button').addEventListener('click', function (e) {
	e.preventDefault();

	let num = document.querySelector('input').value;

	if (num != 5) {
		container.style.display = 'none';
		error.style.display = 'block';
		document.querySelector('input').value = null;
		setTimeout(() => {
			container.style.display = 'flex';
			error.style.display = 'none';
		}, 3000);
	} else {

		container.style.display = 'none';
		good.style.display = 'block';
		document.querySelector('input').value = null;
		setTimeout(() => {
			console.log("asdasd");
			window.location.href = "../cyberpunkMission/guessNumber/index.html";
		}, 2000);
	}
});