var src;
var logo;
var array;
var audio;
var context;
var analyzer;

logo = document.getElementById("logo").style

audio = document.getElementById("audio");

window.onclick = function(){
    preparation();
    audio.play();
}

function preparation(){
    context = new AudioContext();
    analyzer = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyzer);
    analyzer.connect(context.destination);
    loop();
}

function loop(){
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyzer.frequencyBinCount);
    analyzer.getByteFrequencyData(array);

    logo.minHeight = (array[40]) + "px";
    logo.width = (array[40]) + "px";
}