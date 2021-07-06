//when page is refreshed -> roll dice, higher number wins 
//create 2 random numbers up to 6 
    //math.random * 6, floor + 1
    
function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice
}

//show dice corresponding to random number
    //concatenate "dice" + randomNumber + ".png" to select dice

function rollDice1() {
    var dice1 = rollDice();
    var img1Source = "projects/dice-game/images/dice" + dice1 + ".png";
    return img1Source
}

function rollDice2() {
    var dice2 = rollDice();
    var img2Source = "projects/dice-game/images/dice" + dice2 + ".png";
    return img2Source
}

    //use DOM manipulation to change source attribute of img1 & img2

document.querySelector(".gameInit").addEventListener("click", () => {
    document.querySelector(".img1").setAttribute("src", rollDice1());
    document.querySelector(".img2").setAttribute("src", rollDice2());
});




