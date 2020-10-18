var size = document.querySelectorAll(".drum").length;

// using clicking the mouse to the element (button)
for (let i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let button1 = this.innerHTML;
        makeSound(button1);
        buttonAnimation(button1);


    });
}

// Using keypress 
document.addEventListener("keypress", function (heyU) {
    makeSound(heyU.key);
    buttonAnimation(heyU.key);
});


//Pull up all the drama audio
function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log("Somthing went wrong")
            break;
    }

}


function buttonAnimation(currentKey) {



    //This will give shadow to the buttons
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // This will remove shadow after .5 second
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

   
}