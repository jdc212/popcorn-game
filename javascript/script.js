var character = 
document.getElementById("character");
var block = document.getElementById("mouth");
function jump() {
    if (character.classList != "animate") {
    character.classList.add("animate");
    }
    setTimeout(function (){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function () {
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var mouthLeft = 
    parseInt(window.getComputedStyle(mouth).getPropertyValue("left"));
    if(mouthLeft<20 && mouthLeft>0 && characterTop>=130) {
        mouth.style.animation = "none";
        mouth.style.display = "none";
        alert("You've been eaten!");
    }
}, 10);