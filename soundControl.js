function playMusic(){
    var whistle = document.getElementById("myWhistle");
    if(stage == 1){
        whistle.play();
    }
}let whistlePlayed = 0;
let cameraPlayed = 0;
let cameraShotsPlayed = 0;
let fallingPlayed = 0;
let laughAtPlayed = 0;
let handClapPlayed = 0;

function playWhistle(){
    var whistle = document.getElementById("myWhistle");
    if(whistlePlayed == 0){
        whistle.play();
        whistle.addEventListener("ended",function(){
            whistlePlayed = 1;
        });
    }
}

function playCamera(){
    var camera = document.getElementById("myCamera");
    if(cameraPlayed == 0){
        camera.play();
        camera.addEventListener("ended",function(){
            cameraPlayed = 1;
        });
    }
}

function playCameraShots(){
    var cameraShots = document.getElementById("myCameraShots");
    if(cameraShotsPlayed == 0){
        cameraShots.play();
        cameraShots.addEventListener("ended",function(){
            cameraShotsPlayed = 1;
        });
    }
}

function playFalling(){
    var falling = document.getElementById("myFalling");
    if(fallingPlayed == 0){
        falling.play();
        falling.addEventListener("ended",function(){
            fallingPlayed = 1;
        });
    }
}

function playHandClap(){
    var handClap = document.getElementById("myHandClap");
    if(handClapPlayed == 0){
        handClap.play();
        handClap.addEventListener("ended",function(){
            handClapPlayed = 1;
        });
    }
}

function playLaughAt(){
    var laughAt = document.getElementById("myLaughAt");
    if(laughAtPlayed == 0){
        laughAt.play();
        laughAt.addEventListener("ended",function(){
            laughAtPlayed = 1;
        });
    }
}

function soundReset(){
    whistlePlayed = 0;
    cameraPlayed = 0;
    cameraShotsPlayed = 0;
    fallingPlayed = 0;
    laughAtPlayed = 0;
    handClapPlayed = 0;
}