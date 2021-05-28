var idNum =1;

function classRemoval(className) {
    let el = document.getElementById(className);
    el.style.visibility = "hidden";
}

function incId(){
    if (idNum < 11) {
        idNum += 1
    }
}


function decId(){
    if (idNum > 2) {
        idNum -= 1
    }
}
function nextElement(elemId) {
    let elementId = elemId + idNum
    if (idNum < 12) {
        document.getElementById(elementId).style.display = "block"
        if (idNum > 1) {
            let prevElement = elemId + (idNum - 1)
            document.getElementById(prevElement).style.display = "none"
        }
    }
    incId()
}

function prevElement(elemId) {
    let elementId = elemId + idNum
    if (idNum < 12) {
        document.getElementById(elementId).style.display = "none"
        if (idNum > 1) {
            let prevElement = elemId + (idNum - 1)
            document.getElementById(prevElement).style.display = "block"
        }
    }
    decId()
}
function hideElement(elemId){
document.getElementById(elemId).style.display = "none"
}
