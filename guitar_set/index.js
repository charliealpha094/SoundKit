// Done by Carlos Amaral (2021/02/06)


// Detecting button press
var numberofGuitarButtons = document.querySelectorAll(".guitar").length;

for(var i = 0; i < numberofGuitarButtons; i++) {
    document.querySelectorAll(".guitar")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting keyboard press
document.addEventListener("keypress", function() {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var guitar1 = new Audio("sounds/guitar_a.mp3");
            guitar1.play();
            break;

        case "b":
            var guitar2 = new Audio("sounds/guitar_b.mp3");
            guitar2.play();
            break;

        case "c":
            var guitar3 = new Audio("sounds/guitar_c.mp3");
            guitar3.play();
            break;

        case "d":
            var guitar4 = new Audio("sounds/guitar_d.mp3");
            guitar4.play();
            break;

        case 'e':
            var guitar5 = new Audio("sounds/guitar_e.mp3");
            guitar5.play();
            break;

        case 'f':
            var guitar6 = new Audio("sounds/guitar_f.mp3");
            guitar6.play();
            break;

        case 'g':
            var guitar7 = new Audio("sounds/guitar_g.mp3");
            guitar7.play();
            break;

        case 'h':
            var guitar8 = new Audio("sounds/guitar_h.mp3");
            guitar8.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}


// Detecting random button press

document.querySelector(".random").addEventListener("click", function() {

    this.classList.add("guitar-generator");

    var numberOfRandomGuitar = 27;
    var randomPlayer = setInterval(() => {

        const randomNoteArrayIndex = Math.floor(
            Math.random() * (numberofGuitarButtons + 1)
        );
        const selectedNote = document.querySelectorAll("button")[
            randomNoteArrayIndex
        ];

        makeSound(selectedNote.innerHTML);
        buttonAnimation(selectedNote.innerHTML);

        numberOfRandomGuitar--;

        if (numberOfRandomGuitart === 0) {
            clearInterval(randomPlayer);
            this.classList.remove("guitar-generator");
        }
    }, 120);

});
