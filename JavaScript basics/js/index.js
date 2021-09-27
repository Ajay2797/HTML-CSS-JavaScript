var fname;
var course;
var mstatus;
var pin;

function jsprint() {
    fname = document.getElementById("fname").value;
    course = document.getElementById("course").value;
    mstatus = document.getElementById("mstatus").value;
    pin = document.getElementById("pin").value;
    console.log("Name: " + fname);
    console.log("Endroled course: " + course);
    console.log("Marital Status: " + mstatus);
    console.log("Area Pin: " + pin);
}