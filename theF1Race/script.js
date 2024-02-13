const btnStart = document.getElementById('btnStart');
const containerStage1 = document.getElementById("containerStage1");
const imgCalendar = document.getElementById("imgCalendar");

btnStart.addEventListener('click', function () {
	btnStart.style.display = 'none';
	document.querySelector("h1").style.display = 'none';
	containerStage1.style.display = 'block';
});


imgCalendar.addEventListener('click', function (e) {
	console.log("Map");
});