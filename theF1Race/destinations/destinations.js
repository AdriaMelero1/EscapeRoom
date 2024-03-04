//For every destination, there are 3 buttons and only one is the good one, if you click 
//the wrong answer a fail will appear for a second and then you can try again, 
//if is the good answer, a image will appear and then you're redirected to the next stage

//Event listeners for the answer buttons
document.getElementById('bad').addEventListener('click', function (e) {
	wrongAnswer();
});

document.getElementById('badd').addEventListener('click', function (e) {
	wrongAnswer();
});

document.getElementById('good').addEventListener('click', function (e) {
	rightAnswer();
});


//Function to show the right image and redirect to the memory
function wrongAnswer() {
	document.getElementsByClassName('container')[0].style.display = 'none';
	document.getElementById('wrong').style.display = 'block';
	setTimeout(function () {
		document.getElementsByClassName('container')[0].style.display = 'flex';
		document.getElementById('wrong').style.display = 'none';
	}, 5000);
}

document.getElementById("btnHome").addEventListener('click', function () {
	window.location.href = "/index.html";
});

//Show the wrong image for 2 seconds and then hide it so you can retry
function rightAnswer() {
	document.getElementsByClassName('container')[0].style.display = 'none';
	document.getElementById('right').style.display = 'block';
	setTimeout(function () {
		window.location.href = "/theF1Race/memory/memory.html";
	}, 2000);
}