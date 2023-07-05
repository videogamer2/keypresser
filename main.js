var canvas = document.getElementById("space");
var context = canvas.getContext("2d");
var imgwidth = 600;
var imgheight = 500;
var imgX = 500;
var imgY = 350;
var IMG;
var newIMG;

function add(){
    newIMG= new Image();
    newIMG.onload= upd;
    newIMG.src=IMG;
}

function upd(){
    context.drawImage(newIMG, imgX, imgY, imgwidth, imgheight); 
}

window.addEventListener("keydown", keydown);

//copied from the minecraft thing because i forgor the code :skull:
function keydown(event){
    var key = event.keyCode;
    console.log(key);

    if ((key <=122 && key>=97)||(key <=90 && key>=65)) {
        alphabet();
        document.getElementById("showme").innerHTML="You pressed a letter!";
    } else if(key <=57 && key>=48) {
        number();
        document.getElementById("showme").innerHTML="You pressed a number!";
    } else if(key <=40 && key>=37) {
        arrow();
        document.getElementById("showme").innerHTML="You pressed an arrow!";
    } else if((key= 17)||(key= 18)||(key= 27)) {
        special();
        document.getElementById("showme").innerHTML="You pressed a special key!";
    } else {
        other();
        document.getElementById("showme").innerHTML="You pressed another key!";
    }
}
function alphabet(){
    IMG = "letters.jpg";
    add();
}
function number(){
    IMG = "numbers.jpg";
    add();
}
function arrows(){
    IMG = "arrows.png";
    add();
}
function special(){
    IMG = "special_keys.png";
    add();
}
function other(){
    IMG = "other_keys.png";
    add();
}