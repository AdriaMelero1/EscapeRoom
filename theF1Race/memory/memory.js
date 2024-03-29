//cards image url and the team of the driver
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

//Sort randomly the cards
cardsUrls.sort(() => Math.random() - 0.5);

let seconds = sessionStorage.getItem("seconds");
const timer = document.querySelector('h4');


let crono = window.setInterval(function () {
	seconds++;
	timer.innerText = `Time: ${seconds}s`;
}, 1000);

let showedCards = 0;


//On load, add the 20 cards to the container with its image
window.addEventListener('load', (e) => {

	for (let i = 0; i < cardsUrls.length; i++) {
		let container = document.querySelector('.container');
		container.insertAdjacentHTML('afterbegin', `<div class='card'><img class='card ${cardsUrls[i][1]}' src='/theF1Race/memory/images/${cardsUrls[i][0]}'</div>`);
	}
});

//Button restart to refresh the page
document.getElementById('btnRestart').addEventListener("click", function () {
	location.reload();
});


let showingCards = [];

//When clicking in any card
document.getElementsByClassName('container')[0].addEventListener("click", function (e) {

	if (e.target.classList.contains('card')) {


		let cardImg = e.target.children[0];

		//If the card isnt already shown and none or only one card is shown
		if (!cardImg.classList.contains('show') && showedCards < 2) {
			//Add the clicked card to this array and show the image of the card, sum the counter showedcards
			showingCards.push(cardImg);
			cardImg.classList.add('show');
			showedCards++;
			//if there are 2 showed cards, check if theyre  a match
			//Restart the array and the counter, leave them showed and show the message
			if (showedCards === 2) {
				if (showingCards[0].classList[1] === showingCards[1].classList[1]) {
					showingCards.length = 0;
					showedCards = 0;

					document.getElementById('message').innerText = "You found a pair!";
					setTimeout(() => {
						document.getElementById('message').textContent = '';
					}, 2000);

					//Check if all cards are showed, if so, proceed with the game end  process
					if (document.querySelectorAll('.show').length === cardsUrls.length) {
						document.getElementsByClassName('container')[0].style.display = "none";
						document.getElementById('btnRestart').classList.add('big');
						document.getElementById('message').innerText = "You are the World Champion!";
						timer.style.display = 'none';
						window.clearInterval(crono);
						setTimeout(() => {
							document.getElementById('message').textContent = `You are the World Champion!`;
							document.querySelector('h3').innerText = `${seconds} Seconds!`;

							//Check if theres a record and if its been beated
							let actualRecord = localStorage.getItem('f1record');

							if (actualRecord > seconds || actualRecord == null) {
								document.querySelector('h3').innerText = `New record: ${seconds} Seconds!`;
								localStorage.setItem("f1record", seconds);
							} else if (actualRecord != null) {
								document.querySelector('h3').innerText = `Actual record:  ${actualRecord} Seconds`;
								document.querySelector('h5').innerText = `Your time:  ${seconds} Seconds`;
							}

						}, 2000);
						document.getElementById('message').style.fontSize = "50px";
						document.getElementById('btnHome').addEventListener("click", function () {

							window.location.href = "/index.html";
						});
					}
				} else {
					//If theyre not a match, hide the cards and restart variables
					setTimeout(function () {
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


document.getElementById("btnHome").addEventListener('click', function () {
	window.location.href = "/index.html";
});