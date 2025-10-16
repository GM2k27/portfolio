let x=document.getElementsByTagName("h1")[0];
x.addEventListener("click", ()=>{
    x.style.color='pink';
    setTimeout(()=>{
        x.style.color='black';
    },2000);
});

const notes={
    "a":"sounds/piano-c_C#_major.wav",
    "b":"sounds/piano-d_D_major.wav",
    "c":"sounds/piano-d_D_major.wav",
    "d":"sounds/piano-g_G_major.wav",
    "e":"sounds/piano-g_G#_major.wav",
    "f":"sounds/piano-g-6200.mp3",
    "g":"sounds/piano-c_C#_major.wav",
    "v":"sounds/piano-d_D_major.wav",
    "w":"sounds/piano-g_G_major.wav",
    "x":"sounds/piano-g_G#_major.wav",
    "y":"sounds/piano-g_G#_major.wav",
    "z":"sounds/piano-g-6200.mp3",
};

const keys=document.querySelectorAll(".PianoKey");
const vol_cntrl=document.getElementById("volume");

keys.forEach(PianoKey => {
    PianoKey.addEventListener("click",()=>{
        playsound(PianoKey.innerText.trim());
    });
});

function playsound(letter_key)
{
    if(notes[letter_key]){
        let audio = new Audio(notes[letter_key]);
        audio.volume=vol_cntrl.value;

        audio.play();
    }
}

document.addEventListener("keydown",(event)=>{
    playsound(event.key);
})