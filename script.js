/* Setting Player 1 random image */

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSourcePlayer1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSourcePlayer1);


/* Setting Player 2 random image */

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSourcePlayer2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSourcePlayer2);


/* Result logic */

var result = "";

if(randomNumber1>randomNumber2) result = "Player 1 WON";
else if (randomNumber1<randomNumber2) result = "Player 2 WON";
else result = "DRAW";

document.querySelector("h1").innerHTML = result;