"use strict"

let n1;
let n2;
let add;
let

function sum() {
    n1 = parseInt(document.getElementById("a").value); //By id
    n2 = parseInt(document.getElementById("b").value);
    add = n1 + n2;
    document.getElementById("s").value = add;

    // n1 = parseInt(document.getElementsByName("finp")[0].value); //By Name
    // n2 = parseInt(document.getElementsByName("sinp")[0].value);
    // add = n1 + n2;
    // document.getElementsByName("sum")[0].value = add;

}