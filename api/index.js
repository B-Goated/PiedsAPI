function getRandomInt(max) { // number between 1 & max
    return ( Math.floor(Math.random() * Math.floor(max)) )+1;
}

let img = document.getElementById("apiResponse");
img.src = "./images/" + getRandomInt(6) +".png";