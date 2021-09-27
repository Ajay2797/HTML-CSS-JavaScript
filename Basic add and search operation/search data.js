var movie = ["Asuran","Master","Doctor","3","Kaithi","Hero","Coco"];
var cast = ["D","Vj","shiva","D","Karthi","Shiva","Thara"];
var crew = ["vetri","Logesh","Nelson","Aish","Logesh","Mithran","Nelson"];
var year = ["2017","2019","2021","2016","2016","2021","2017"];
function mySearch(){ 
    document.getElementById("movie").innerHTML ="";
    document.getElementById("cast").innerHTML ="";
    document.getElementById("crew").innerHTML ="";
    document.getElementById("year").innerHTML =""; 
    var search = document.getElementById("data").value; 
    var length = movie.length;

    if(document.getElementById("category").value == "movie"){
        console.log(document.getElementById("category").value);
        var cate = movie;
    }
    else if(document.getElementById("category").value == "cast"){
        console.log(document.getElementById("category").value);
        var cate = cast;
    }
    else if(document.getElementById("category").value == "crew"){
        console.log(document.getElementById("category").value);
        var cate = crew;
    }
    else if(document.getElementById("category").value == "year"){
        console.log(document.getElementById("category").value);
        var cate = year;
    }
    else{
        var cate = "all";
    }
    for(var i=0; i<length; i++){
        console.log(cate[i]);
        if(cate[i] == search ){
            console.log("working");
            document.getElementById("movie").innerHTML += movie[i]  + "<br>";
            document.getElementById("cast").innerHTML += cast[i]  + "<br>";
            document.getElementById("crew").innerHTML += crew[i]  + "<br>";
            document.getElementById("year").innerHTML += year[i]  + "<br>";
        }
        else if(document.getElementById("category").value == "all" && search == ""){
            console.log("all working");
            document.getElementById("movie").innerHTML += movie[i]  + "<br>";
            document.getElementById("cast").innerHTML += cast[i]  + "<br>";
            document.getElementById("crew").innerHTML += crew[i]  + "<br>";
            document.getElementById("year").innerHTML += year[i]  + "<br>";                    
        }
    }
}
function myAdd(){
    addmovie = document.getElementById("inputmovie").value;
    addcast = document.getElementById("inputcast").value;
    addcrew = document.getElementById("inputcrew").value;
    addyear = document.getElementById("inputyear").value;
    if(addmovie!="" && addcast!="" && addcrew!="" && addyear!=""){
        movie.push(addmovie);
        cast.push(addcast);
        crew.push(addcrew);
        year.push(addyear);
        document.getElementById("inputmovie").value ="";
        document.getElementById("inputcast").value ="";
        document.getElementById("inputcrew").value ="";
        document.getElementById("inputyear").value ="";
    }

}