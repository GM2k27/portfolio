// document.addEventListener("keypress",function(){
//     console.log("key pressed");
// })

// document.addEventListener("keypress",function(event){
//     console.log(event);//logs the key thst has pressed
// })

document.addEventListener("keypress",function(event){
    switch (event.key) {//key property of event
        case "a":
            let audio1 = new Audio("dance_kick3-92807.mp3");
            audio1.play();
            break;
        case "b":
            let audio2 = new Audio("fx-percussion-huge-cinematic-tom-hit-283585.mp3");
            audio2.play();
            break;
        case "c":
            let audio3 = new Audio("086069_electronic-snare-drum-1-84699.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("tr707-crash-cymbal-241376.mp3");
            audio4.play();
            break;
        case "e":
            let audio5 = new Audio("middle_tom-40053.mp3");
            audio5.play();
            break;
        case "f":
            let audio6 = new Audio("high_tom-40050.mp3");
            audio6.play();
            break;
        case "g":
            let audio7 = new Audio("14chh-83787.mp3");
            audio7.play();
            break;
        default:
            break;
    }
});

