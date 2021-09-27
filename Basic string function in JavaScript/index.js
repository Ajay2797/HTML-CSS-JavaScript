'use strict'
let t3 = 0;
let std_name = [];
let cap_name = [];

function task1() {
    let name = document.getElementById("name").value;
    if (name.length > 0) {
        document.write("Hi " + name + ", <br> <h2>Welcome to the amazing world of JavaScript.</h2>")
    } else {
        prompt("Name is mandatry.")
    }
}

function task2() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let full_name = fname + " " + mname + " " + lname;
    if (fname.length > 0 || mname > 0 || lname > 0) {
        document.write("Good Morning, " + full_name);
    } else {
        prompt("Fill atleast one field");
    }
}

function sub_task3() {
    std_name[t3] = document.getElementById("std_name").value;
    document.getElementById("std_list").innerHTML += std_name[t3] + ", ";
    t3++;
    document.getElementById("std_name").value = "";
}

function task3() {
    for (let i = 0; i < t3; i++) {
        let str = std_name[i];
        let cap = str.charAt(0).toUpperCase();
        let str_cap = cap + str.slice(1);
        cap_name[i] = str_cap;
        console.log(str_cap);
    }
    document.write(cap_name);
}

function task4() {
    let str = document.getElementById("str").value;
    let str_arr = str.split(" ");
    let len = str_arr.length;
    for (let i = 0; i < len; i++) {
        document.write(str_arr[(len - 1) - i] + " ");
    }
}