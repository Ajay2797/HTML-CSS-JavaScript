function ok(){
    var a = document.getElementById("tb1").value;
    var b = document.getElementById("tb3").value;
    document.getElementById("tb2").value = "";

    if(b > 1){
        if( a>0 && a<5 ){
            var c = b - a;
            document.getElementById("tb3").value = c;
        }
        else{
            alert("enter a number brtween 1 to 4");
        }
    }
    else if(b==1){
        if(a!=1){
            alert("Only one stick is remining");
        }
    else{
        document.getElementById("tb4").value = "YOU LOST & I WON";
        document.getElementById("tb3").value = 0;
        alert("I WON, BETTER LUCK NEXT TIME");
        document.getElementById("result").innerHTML = "BETTER LUCK NEXT TIME....";

    }  
}
}

function ok1(){
    var c = document.getElementById("tb3").value;
    if(c==21){
        alert("Your start");
    }
    else{
        if(c>16){
            document.getElementById("tb1").value = "";
            var d = c-16;
            document.getElementById("tb2").value = d;
            document.getElementById("tb3").value = c-d;
        }
        else if (c>11){
            document.getElementById("tb1").value = "";
            var d = c-11;
            document.getElementById("tb2").value = d;
            document.getElementById("tb3").value = c-d;
        }
        else if (c>6){
            document.getElementById("tb1").value = "";
            var d = c-6;
            document.getElementById("tb2").value = d;
            document.getElementById("tb3").value = c-d;
        }
        else if (c>1){
            document.getElementById("tb1").value = "";
            var d = c-1;
            document.getElementById("tb2").value = d;
            document.getElementById("tb3").value = c-d;
        }
    }
}    