// The Simon Game 
//play random combination of colored fields
//create an array of random numbers, add a random number each round 

var isGameOver = false; 
var sequence = ["red","green","blue","red"];

$("button").click(startGame);

function startGame() {
    // for (let index = 0; index < 5; index++) {
    //     sequence.push(nextColour());
        touchField();
        // playSound();
    // } 
}

function nextColour() {
    var randomNumber = Math.floor(Math.random()*4) + 1;
    if (randomNumber === 1) {
        var nextColour = "red";
    } else if (randomNumber === 2) {
        var nextColour = "blue";
    } else if (randomNumber === 3) {
        var nextColour = "green";
    } else {
        var nextColour = "yellow";
    }
    return nextColour 
};

function touchField() {
    var delayIn = 300
    var delayOut = 600;
    for (let index = 0; index < sequence.length; index++) {
        setTimeout(function(){$("."+ sequence[index]).addClass("active")}, delayIn);
        setTimeout(function() {$("."+ sequence[index]).removeClass("active")}, delayOut);
        delayIn += 300;
        delayOut += 300;
    }
    
}
//increase combination by 1 each iteration 
//player reiterates played combination 
//if successfull -> increase by 1 element 