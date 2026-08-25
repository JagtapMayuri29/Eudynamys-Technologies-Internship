console.log("main.js running =========");


var a;
var b;

function storeValueA(event) {
    a = parseInt(event.target.value);
}

function storeValueB(event) {
    b = parseInt(event.target.value);
}


function add(a, b) {
    let sum = a + b;
    console.log("Sum = ", sum)

    var element = document.querySelector('#output');
    element.innerHTML = "Addition: " + sum;

}

function sub(a, b) {
    let sub = a - b;
    var element = document.querySelector('#output');
    element.innerHTML = "Substration = " + sub;
}


