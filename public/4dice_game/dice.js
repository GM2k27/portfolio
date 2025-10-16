let player1=prompt("Enter name of player 1");
document.getElementById("p1").innerHTML=player1;

let player2=prompt("Enter name of player 2");
document.getElementById("p2").innerHTML=player2;

let dice=document.getElementById("play");

function diceroll(){
    //dice1
    let num=Math.floor(Math.random()*6+1);
    let dicelocation="d-"+num+".png";
    let img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",dicelocation);

    //dice2
    let num2=Math.floor(Math.random()*6+1);
    dicelocation2="d-"+num2+".png";
    let img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src",dicelocation2); //this is used to update image dynamically

    if(num==num2){
        let textElement = document.querySelector("h1");
        textElement.innerHTML = "Its Draw!";
        textElement.style.color = "red";
    }else if(num>num2){
        document.querySelector("h1").innerHTML=player1+" Wins";
        document.querySelector("h1").style.color="blue";
    }else if(num<num2){
        document.querySelector("h1").innerHTML=player2+" Wins"
        document.querySelector("h1").style.color="blue";
    }else{
        document.querySelector("h1").innerHTML="Invalid";
    }
}
