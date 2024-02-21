const btnStart = document.getElementById('btnStart');
const containerStage1 = document.getElementById("containerStage1");
const btnHome = document.getElementById("btnHome");
let imgDesktop = document.getElementById('imgDesktop');
let areaCalendar = document.getElementById('areaCalendar');
let imgCalendar = document.getElementById('imgCalendar');
let areaMap = document.getElementById('areaMap');
let divMap = document.getElementById('divMap');
let destiny;


window.onload = function () {
    setDesktopImage();
};


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
    document.getElementById('btnBack').style.display = 'block';

});


imgCalendar.addEventListener('click', function (e) {
    imgDesktop.style.display = 'block';
    imgCalendar.style.display = 'none';
    document.getElementById('btnBack').style.display = 'none';
});

areaMap.addEventListener('click', function (e) {
    imgDesktop.style.display = 'none';
    divMap.style.display = 'block';
    document.getElementById('btnBack').style.display = 'block';

});

divMap.addEventListener('click', function (e) {
    imgDesktop.style.display = 'block';
    divMap.style.display = 'none';
    document.getElementById('btnBack').style.display = 'none';

});


document.getElementById('monaco').addEventListener('click', function (e) {
    if (destiny === "monaco") {
        window.location.href = "destinations/monaco/monaco.html";
    } else {
        alert("You are not in Monaco");
    }
});

document.getElementById('hungary').addEventListener('click', function (e) {
    if (destiny === "hungary") {
        window.location.href = "destinations/hungary/hungary.html";
    } else {
        alert("You are not in Hungary");
    }
});

document.getElementById('spain').addEventListener('click', function (e) {
    if (destiny === "spain") {
        window.location.href = "destinations/spain/spain.html";
    } else {
        alert("You are not in spain");
    }
});

document.getElementById('england').addEventListener('click', function (e) {
    if (destiny === "england") {
        window.location.href = "destinations/england/england.html";
    } else {
        alert("You are not in england");
    }
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


function setDesktopImage() {

    const imagesUrls = ['images/desktop2426.png', 'images/desktop0507.png', 'images/desktop1921.png', 'images/desktop2123.png'];
    let random = Math.floor(Math.random() * 4);
    imgDesktop.src = imagesUrls[random];
    switch (random) {
        case 0:
            destiny = "monaco";
            break;
        case 1:
            destiny = "england";
            break;
        case 2:
            destiny = "hungary";
            break;
        case 3:
            destiny = "spain";
            break;
    }

}


document.getElementById('btnBack').addEventListener('click', (e) => {

    imgDesktop.style.display = 'block';
    divMap.style.display = 'none';
    imgCalendar.style.display = 'none';
    document.getElementById('btnBack').style.display = 'none';
});