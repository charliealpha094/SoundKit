// Done by Carlos Amaral (2021/05/31)

// Detecting Button Press
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting keyboard Press
document.addEventListener("keypress", function() {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


// Detecting random button press

document.querySelector(".random").addEventListener("click", function() {

    this.classList.add("beat-generator");

    var numberOfRandomBeat = 27;
    var randomPlayer = setInterval(() => {

        const randomNoteArrayIndex = Math.floor(
            Math.random() * (numberofDrumButtons + 1)
        );
        const selectedNote = document.querySelectorAll("button")[
            randomNoteArrayIndex
        ];

        makeSound(selectedNote.innerHTML);
        buttonAnimation(selectedNote.innerHTML);

        numberOfRandomBeat--;

        if (numberOfRandomBeat === 0) {
            clearInterval(randomPlayer);
            this.classList.remove("beat-generator");
        }
    }, 120);

});
