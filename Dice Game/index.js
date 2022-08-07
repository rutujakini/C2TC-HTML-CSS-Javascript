//player 1

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomimage1 = "images/dice" + randomNumber1 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

//player 2 

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomimage2 = "images/dice" + randomNumber2 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

//player 3

var randomNumber3 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomimage3 = "images/dice" + randomNumber3 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[2].setAttribute("src", randomimage3);

//player 4

var randomNumber4 = Math.floor(Math.random() * 6 ) + 1; //generating random number between 1-6

var randomimage4 = "images/dice" + randomNumber4 + ".png"; // for getting random number png 1-6

document.querySelectorAll("img")[3].setAttribute("src", randomimage4);

//main
if((randomNumber1 > randomNumber2) && ((randomNumber1 > randomNumber3) && (randomNumber1 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = " Player 1 wins !";
}else if((randomNumber2 > randomNumber1) && ((randomNumber2 > randomNumber3) && (randomNumber2 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = " Player 2 wins !";
}else if((randomNumber3 > randomNumber2) && ((randomNumber3 > randomNumber1) && (randomNumber3 > randomNumber4)))
{
    document.querySelector("h1").innerHTML = " Player 3 wins !";
}else if((randomNumber4 > randomNumber2) && ((randomNumber4 > randomNumber3) && (randomNumber4 > randomNumber1)))
{
    document.querySelector("h1").innerHTML = " Player 4 wins !";
}else 
{
    document.querySelector("h1").innerHTML = " Draw !";
}





