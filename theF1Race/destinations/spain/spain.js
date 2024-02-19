
document.getElementById('blue').addEventListener('click', function (e) {


});


document.getElementById('red').addEventListener('click', function (e) {
	showCrash();
});
document.getElementById('white').addEventListener('click', function (e) {
	showCrash();
});

function showCrash() {
	document.getElementsByClassName('container')[0].style.display = 'none';
	document.getElementById('crash').style.display = 'block';
	setTimeout(function () {
		document.getElementsByClassName('container')[0].style.display = 'flex';
		document.getElementById('crash').style.display = 'none';
	}, 5000);
}