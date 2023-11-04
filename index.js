var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNumber1 + ".png" ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1 ;
var imageSource2 = "images/dice" + randomNumber2 + ".png" ;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Tie";
}

else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}