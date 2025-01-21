function getRandomInt(max) { // number between 1 & max
    return ( Math.floor(Math.random() * Math.floor(max)) )+1;
}

window.location.href = "./images/" + getRandomInt(6) +".png";
