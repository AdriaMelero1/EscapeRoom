const cardsUrls = [
	['alexander.avif', 'williams'],
	['logan.avif', 'williams'],
	['carlos.avif', 'ferrari'],
	['charles.avif', 'ferrari'],
	['daniel.avif', 'alpha'],
	['yuki.avif', 'alpha'],
	['esteban.avif', 'alpine'],
	['pierre.avif', 'alpine'],
	['fernando.avif', 'aston'],
	['lance.avif', 'aston'],
	['george.avif', 'mercedes'],
	['lewis.avif', 'mercedes'],
	['kevin.avif', 'haas'],
	['nico.avif', 'haas'],
	['lando.avif', 'mclaren'],
	['oscar.avif', 'mclaren'],
	['max.avif', 'redbull'],
	['sergio.avif', 'redbull'],
	['valteri.jpg', 'alfaromeo'],
	['zhou.jpg', 'alfaromeo']

];

cardsUrls.sort(() => Math.random() - 0.5);

let showedCards = 0;


window.addEventListener('load', (e) => {

	for (let i = 0; i < cardsUrls.length; i++) {
		let container = document.querySelector('.container');
		container.insertAdjacentHTML('afterbegin', `<div class='card'><img class='card ${cardsUrls[i][1]}' src='/theF1Race/memory/images/${cardsUrls[i][0]}'</div>`);
	}
});

document.getElementById('btnRestart').addEventListener("click", function () {
	location.reload();
});

let showingCards = [];
document.getElementsByClassName('container')[0].addEventListener("click", function (e) {

	if (e.target.classList.contains('card')) {


		let cardImg = e.target.children[0];

		if (!cardImg.classList.contains('show') && showedCards < 2) {
			showingCards.push(cardImg);
			cardImg.classList.add('show');
			showedCards++;
			if (showedCards === 2) {
				if (showingCards[0].classList[1] === showingCards[1].classList[1]) {
					showingCards.length = 0;
					showedCards = 0;

					document.getElementById('message').innerText = "You found a pair!";
					setTimeout(() => {
						document.getElementById('message').textContent = '';
					}, 2000);

					if (document.querySelectorAll('.show').length === cardsUrls.length) {
						document.getElementsByClassName('container')[0].style.display = "none";
						document.getElementById('btnRestart').classList.add('big');
						document.getElementById('btnHome').classList.add('big');
						document.getElementById('message').innerText = "You are the World Champion!";
						setTimeout(() => {
							document.getElementById('message').textContent = 'You are the World Champion!';
						}, 2000);
						document.getElementById('message').style.fontSize = "50px";
						document.getElementById('btnHome').addEventListener("click", function () {

							window.location.href = "/index.html";
						});
					}
				} else {
					setTimeout(function () {
						console.log(showingCards);
						showingCards.forEach(card => {
							card.classList.remove('show');
						});
						showedCards = 0;
						showingCards.length = 0;
					}, 1000);
				}
			}
		}
	}
});

