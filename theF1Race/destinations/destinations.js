document.getElementById('bad').addEventListener('click', function (e) {
	showCrash();
});

document.getElementById('badd').addEventListener('click', function (e) {
	showCrash();
});

document.getElementById('good').addEventListener('click', function (e) {
	rightAnswer();
});

function showCrash() {
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


function rightAnswer() {
	document.getElementsByClassName('container')[0].style.display = 'none';
	document.getElementById('right').style.display = 'block';
	setTimeout(function () {
		window.location.href = "/theF1Race/memory/memory.html";
	}, 2000);
}