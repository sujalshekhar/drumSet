
function keyPress(key) {
    switch(key) {

        case 'w' :
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;

        case 'a' :
            var audio1 = new Audio('sounds/tom-2.mp3');
            audio1.play();
            break;

        case 's' :
            var audio1 = new Audio('sounds/tom-3.mp3');
            audio1.play();
            break;

        case 'd' :
            var audio1 = new Audio('sounds/tom-4.mp3');
            audio1.play();
            break;

        case 'j' :
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;

        case 'k' :
            var audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();
            break;

        case 'l' :
            var audio1 = new Audio('sounds/snare.mp3');
            audio1.play();
            break;

    }
}

function addAnimation(character) {
    var animation = document.querySelector("." + character);
    animation.classList.add("pressed");
    setTimeout(function() {
        animation.classList.remove("pressed");
    },100);

    // var h1Animation = document.querySelector("h1");
    // h1Animation.classList.add("h1Jump");
    // setTimeout(function () {
    //     h1Animation.classList.remove("h1Jump");
    // })

}

function call() {
    addAnimation(this.innerHTML);
    keyPress(this.innerHTML);
}

for(var i=0;i<7;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", call);
}

document.addEventListener("keydown", function(event) {
    keyPress(event.key);
    addAnimation(event.key);
});

