var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randImg1 = "dice" + randomNumber1 + ".png";

var randImg2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randImg1);

document.querySelectorAll("img")[1].setAttribute("src", randImg2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a tie!"
}
