// BY CLICKING THE KEY.

//FOR LOOP IS USING FOR DRUM 1 TO THIER LENGTH.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    //ADDING THE EVENTLISTNER FOR CLICKING THE KEY (CLICK).ANNYOUMUS FUNCTION.
    document.querySelectorAll("button")[i].addEventListener("click", function() {

        // CHANING THE INNER HTML.
        var buttonInnerHTML = this.innerHTML;

        // PASSING THE FUNCTION FOR CLICKING.(MAKE SOUND).
        makeSound(buttonInnerHTML);

        // PASSING THE FUNCTION FOR ANIAMTION IN KEY.(BUTTONANIMATION).
        buttonAnimation(buttonInnerHTML);

    });
}


// BY PRESSING THE SPECIFIC KEY FROM KEYBOARD.
document.addEventListener("keypress", function(event) {

    // PASSING THE FUNCTION FOR PRESSING THE KEY.(MAKE SOUND).
    makeSound(event.key);

    // PASSING THE FUNCTION FOR ANIAMTION IN KEY.(BUTTONANIMATION).
    buttonAnimation(event.key);
});
// CREATING THE FUNCTION.(MAKE SOUND)
function makeSound(key) {

    //USING THR SWITCH STATEMENT.
    switch (key) {
        // CASE FOR "W".
        case "w":
            // PLAY THE SOUND.
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
            // CASE FOR "A".
        case "a":
            // PLAY THE SOUND.
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

            // CASE FOR "S".
        case "s":
            // PLAY THE SOUND.
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;


            // CASE FOR "D".
        case "d":
            // PLAY THE SOUND.
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

            // CASE FOR "J".
        case "j":
            // PLAY THE SOUND.
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

            // CASE FOR "K".
        case "k":
            // PLAY THE SOUND.
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

            // CASE FOR "L".
        case "l":
            // PLAY THE SOUND.
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }
}

// ADDING THE ANIMATION TO KEYS.

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    // ADDING THE CLASS.(PRESSED).
    activeButton.classList.add("pressed");

    //  REMOVING THE CLASS.(PRESSED).AFTER 1 SEC.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}