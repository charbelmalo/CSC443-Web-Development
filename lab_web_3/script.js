var light = document.getElementById('light');
var switch_button = document.getElementById('switch');
var lightactive = false;
var sound = document.getElementById('clicksound')
    switch_button.onclick = function (){

    if (lightactive === false) {    
       lightactive = true;
        light.src='light-on.png';
switch_sound();
    }

    else {
        lightactive = false;
        switch_sound();
        light.src='light.png';
    }

    };
    function switch_sound(){
        var audio = document.createElement("audio");
        audio.src = "click.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();   
    }