let idNum = 2;
let currentElement = "start";

function start(){
    idNum = 2;
}

    function classRemoval(className) {
        let el = document.getElementById(className);
        el.style.visibility = "hidden";
    }

    function incId() {
        if (idNum < 11) {
            idNum += 1
        }
    }


    function decId() {
        if (idNum > 2) {
            idNum -= 1
        }
    }

function showElement(elemId) {
    document.getElementById(currentElement).className = "fade-out"
    document.getElementById(currentElement).style.display = "none"
    document.getElementById(elemId).style.display = "block"
    document.getElementById(elemId).className = "fade-in"
    currentElement = elemId
}

function nextElement(elemId) {
        let elementId = elemId + idNum
        if (idNum < 12) {
            document.getElementById(elementId).style.display = "block"
            document.getElementById(elementId).className = "fade-in"
            if (idNum > 1) {
                let prevElement = elemId + (idNum - 1)
                document.getElementById(prevElement).className = "fade-out"
                document.getElementById(prevElement).style.display = "none"
            }
        }
        incId()
    }

    function prevElement(elemId) {
        let elementId = elemId + idNum
        if (idNum < 12) {
            document.getElementById(elementId).className = "fade-out"
            document.getElementById(elementId).style.display = "none"
            if (idNum > 1) {
                let prevElement = elemId + (idNum - 1)
                document.getElementById(prevElement).style.display = "block"
                document.getElementById(prevElement).className = "fade-in"
            }
        }
        decId()
    }

    function hideElement(elemId) {
        document.getElementById(elemId).style.display = "none"
    }