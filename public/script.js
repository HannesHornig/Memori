let idNum = 2;
let currentElement = "start";

function start(){
    idNum = 2;
}


function showElement(elemId) {
    document.getElementById(currentElement).className = "fade-out"
    document.getElementById(currentElement).style.display = "none"
    document.getElementById(elemId).style.display = "block"
    document.getElementById(elemId).className = "fade-in"
    currentElement = elemId
}

