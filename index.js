$(document).ready(function(){
const arr = [' Full-stack developer',' Cybersecurity Enthusiast'];
let ind=0;

function typingText(){
    $(".type").fadeOut(1000,function(){
        $(this).text(arr[ind]).fadeIn(1000);
    })

    ind=(ind+1)%arr.length;
}

typingText();
setInterval(typingText,2000)
})

