//add event listener to buttons 
//on "click" -> execute sound associated to button

numberOfButtons = document.querySelectorAll(".drum").length

for (let index = 0; index < numberOfButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        pressed(buttonInnerHTML);
    });
};


//listen to keybord events 
//get key -> compare key to button
//play sound if key matches button

document.addEventListener("keydown", (e) => {
    buttonPressed = e.key;
    makeSound(buttonPressed);
    pressed(buttonPressed);
})

function pressed(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}


function makeSound(key) {
    switch (key) {
        case "w": 
            var tom1 = new Audio("/projects/drumkit/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a": 
            var tom2 = new Audio("/projects/drumkit/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": 
            var tom3 = new Audio("/projects/drumkit/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": 
            var tom4 = new Audio("/projects/drumkit/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j": 
            var kick = new Audio("/projects/drumkit/sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k": 
            var snare = new Audio("/projects/drumkit/sounds/snare.mp3");
            snare.play();
            break;

        case "l": 
            var crash = new Audio("/projects/drumkit/sounds/crash.mp3");
            crash.play();
            break;
    };
};