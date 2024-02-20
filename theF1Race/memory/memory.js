const cardsUrls = [
	['alexander.avif', 'williams'],
	['carlos.avif', 'ferrari'],
	['charles.avif', 'ferrari'],
	['daniel.avif', 'alpha'],
	['esteban.avif', 'alpine'],
	['fernando.avif', 'aston'],
	['george.avif', 'mercedes'],
	['kevin.avif', 'haas'],
	['lance.avif', 'aston'],
	['lando.avif', 'mclaren'],
	['lewis.avif', 'mercedes'],
	['logan.avif', 'williams'],
	['nico.avif', 'haas'],
	['max.avif', 'redbull'],
	['pierre.avif', 'alpine'],
	['oscar.avif', 'mclaren'],
	['sergio.avif', 'redbull'],
	['valteri.jpg', 'alfaromeo'],
	['yuki.avif', 'alpha'],
	['zhou.jpg', 'alfaromeo']

];

cardsUrls.sort(() => Math.random() - 0.5);

const cards = document.querySelectorAll('.card');

let showedCards = 0;
let n = [];


window.addEventListener('load', (e) => {

	for (let i = 0; i < cardsUrls.length; i++) {
		let container = document.querySelector('.container');
		container.insertAdjacentHTML('afterbegin', `<div class='card'><img class='${cardsUrls[i][1]}' src='/theF1Race/memory/images/${cardsUrls[i][0]}'</div>`);
	}
});

cards[0].addEventListener("click", function (e) {
	console.log('click');
});




document.getElementById('btnRestart').addEventListener("click", function () {
	location.reload();
});