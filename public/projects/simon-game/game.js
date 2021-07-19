// The Simon Game 
//play random combination of colored fields
//create an array of random numbers, add a random number each round 

var isGameOver = false; 
var colours = ["red","blue","green","yellow"];
var sequence = [];
var playerInput = [];
var level = 0

$(".initiate").click(()=> {
    activateNextField();
    $("h1").text("The Simon Game");
});

//add event listener to all fields
$(".button").click((e) => {

    //push to playerInput
    var color = e.target.id;
    playerInput.push(color);
    touchField(color);
    playSound(color);

    //compare playerInput to sequence
    compare();
})

function compare(){
    var counter = playerInput.length-1
    if ((playerInput[counter] === sequence[counter]) && (playerInput.length === sequence.length)) {
        setTimeout(()=>{activateNextField()}, 1000);
        playerInput = [];
        level++;
        console.log("correct, end of sequence!")
    } else if (playerInput[counter] === sequence[counter]) {
        console.log("correct!");
    } else {
        gameOver();
        $(".initiate").text("Restart the Game!")
        console.log("gameOver")
    }
}

function gameOver() {
    //redden screen
    $("body").addClass("game-over");
    $("h1").text("Game Over!");
    setTimeout(()=>{$("body").removeClass("game-over")}, 50)
    //playSound
    var gameOverSound = new Audio("projects/simon-game/audio/wrong.mp3");
    gameOverSound.play();
    sequence = [];
    playerInput = [];
    level = 0;
}

function activateNextField() {
    var currentColour = nextColour();
    touchField(currentColour);
    playSound(currentColour);
    sequence.push(currentColour)
    $("#level").text("Level: " + level);
}

// determines next colour of the sequence 
function nextColour() {
    var randomNumber = Math.floor(Math.random()*4);
    var nextColour = colours[randomNumber]
    return nextColour 
};

function touchField(colour) {
    $("#"+ colour).fadeOut(90).fadeIn(90);
}

function playSound(colour) {
    var newSound = new Audio("/projects/simon-game/audio/" + colour + ".mp3");
    newSound.play();
}


//increase combination by 1 each iteration 
//player reiterates played combination 
//if successfull -> increase by 1 element 