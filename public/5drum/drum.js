// document.querySelector("button").addEventListener("click",gotclick);//dont add parenthesis bcz funtion gets automatically called when page is loaded **you can write direct function here without name(anonymous function)**

var butnum=document.querySelectorAll(".drum").length;

var volcntrl=document.querySelector(".vol");

for (let i = 0; i < butnum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonkey=this.innerHTML;

        gotclick(buttonkey);

        buttonanimation(buttonkey);
    });
}

function gotclick(key) {
    let audio;
    switch (key) {
        case "a":
            audio = new Audio("sounds/dance_kick3-92807.mp3");

            break;
        case "b":
            audio = new Audio("sounds/fx-percussion-huge-cinematic-tom-hit-283585.mp3");

            break;
        case "c":
            audio = new Audio("sounds/086069_electronic-snare-drum-1-84699.mp3");

            break;
        case "d":
            audio = new Audio("sounds/tr707-crash-cymbal-241376.mp3");

            break;
        case "e":
            audio = new Audio("sounds/middle_tom-40053.mp3");

            break;
        case "f":
            audio = new Audio("sounds/high_tom-40050.mp3");
            break;
        case "g":
            audio = new Audio("sounds/14chh-83787.mp3");
            break;
        default:
            break;
    }

    audio.volume=volcntrl.value;
    audio.play();
}

function buttonanimation(buttonkey){
    var buttonactive=document.querySelector("."+buttonkey);

    buttonactive.classList.add("pressed");

    setTimeout(function(){
        buttonactive.classList.remove("pressed");
    },1000);
}









// let audio=new Audio("sounds/dance_kick3-92807.mp3");
// audio.play();
