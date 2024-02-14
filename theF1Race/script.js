const btnStart = document.getElementById('btnStart');
const containerStage1 = document.getElementById("containerStage1");
const btnHome = document.getElementById("btnHome");
let imgDesktop = document.getElementById('imgDesktop');
let areaCalendar = document.getElementById('areaCalendar');
let imgCalendar = document.getElementById('imgCalendar');
let areaMap = document.getElementById('areaMap');
let imgMap = document.getElementById('imgMap');
btnStart.addEventListener('click', function () {
	btnStart.style.display = 'none';
	document.querySelector("h1").style.display = 'none';
	containerStage1.style.display = 'block';
	updateCoords();
});

btnHome.addEventListener('click', function () {
	window.location.href = "/index.html";
});


areaCalendar.addEventListener('click', function (e) {
	imgDesktop.style.display = 'none';
	imgCalendar.style.display = 'block';
});


imgCalendar.addEventListener('click', function (e) {
	imgDesktop.style.display = 'block';
	imgCalendar.style.display = 'none';
});

areaMap.addEventListener('click', function (e) {
	console.log("asdasd");
	imgDesktop.style.display = 'none';
	imgMap.style.display = 'block';
});

imgMap.addEventListener('click', function (e) {
	imgDesktop.style.display = 'block';
	imgMap.style.display = 'none';
});




// Original size of the image
let originalWidth = imgDesktop.naturalWidth;
let originalHeight = imgDesktop.naturalHeight;

// Original coordinates of the areas
let originalCoordsCalendar = areaCalendar.coords.split(',').map(Number);
let originalCoordsMap = areaMap.coords.split(',').map(Number);

// Function to update the coordinates of the areas
function updateCoords() {
    console.log("Cords updated");
    let currentWidth = imgDesktop.offsetWidth;
    let currentHeight = imgDesktop.offsetHeight;

    let relativeCoordsCalendar = originalCoordsCalendar.map((coord, index) => {
        return index % 2 === 0 ?
            coord / originalWidth * currentWidth :
            coord / originalHeight * currentHeight;
    });

    let relativeCoordsMap = originalCoordsMap.map((coord, index) => {
        return index % 2 === 0 ?
            coord / originalWidth * currentWidth :
            coord / originalHeight * currentHeight;
    });

    areaCalendar.coords = relativeCoordsCalendar.join(',');
    areaMap.coords = relativeCoordsMap.join(',');
}

window.addEventListener('resize', updateCoords);