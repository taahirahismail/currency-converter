let num = document.getElementById("input-currency");
let from = document.getElementById("currency-select").value;
let to = document.getElementById("currency-show").value;
let display = document.getElementById("output-currency");
// document.getElementById("output-currency").innerHTML = display;

function randToEuro(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 0.048).toFixed(2);
}

function randToPound(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 0.042).toFixed(2);
}

function randToDollar(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 0.052).toFixed(2);
}

function euroToRand(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 0.048).toFixed(2);
}

function euroToPound(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 0.86).toFixed(2);
}

function euroToDollar(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 1.07).toFixed(2);
}

function poundToRand(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 0.042).toFixed(2);
}

function poundToEuro(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 0.86).toFixed(2);
}

function poundToDollar(value) {
    value = parseFloat(value)
    display.innerHTML = (value * 1.24).toFixed(2);
}

function dollarToRand(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 0.052)
}

function dollarToEuro(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 1.07)
}

function dollarToPound(value) {
    value = parseFloat(value)
    display.innerHTML = (value / 1.24)
}

function convertVal() {
    if (from == "ZAR" && to == "ZAR") {
        display.innerHTML = num.value;
    } else if (from == "ZAR" && to == "EUR") {
        randToEuro(num.value);
    } else if (from == "ZAR" && to == "GBP") {
        randToPound(num.value);
    } else if (from == "ZAR" && to == "USD") {
        randToDollar(num.value);
    } else if (from == "EUR" && to == "ZAR") {
        euroToRand(num.value);
    } else if (from == "EUR" && to == "EUR") {
        display.innerHTML = num.value;
    } else if (from == "EUR" && to == "GBP") {
        euroToPound(num.value);
    } else if (from == "EUR" && to == "USD") {
        euroToDollar(num.value);
    } else if (from == "GBP" && to == "ZAR") {
        poundToRand(num.value);
    } else if (from == "GBP" && to == "EUR") {
        poundToEuro(num.value);
    } else if (from == "GBP" && to == "GBP") {
        display.innerHTML = num.value;
    } else if (from == "GBP" && to == "USD") {
        poundToDollar(num.value);
    } else if (from == "USD" && to == "ZAR") {
        dollarToRand(num.value);
    } else if (from == "USD" && to == "EUR") {
        dollarToEuro(num.value);
    } else if (from == "USD" && to == "GBP") {
        dollarToPound(num.value);
    } else if (from == "USD" && to == "USD") {
        display.innerHTML = num.value;
    }
}