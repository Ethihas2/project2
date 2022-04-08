canvas = '';
status = false;

function setup(){
    canvas = createCanvas(680,520)
    canvas.center();
}

function draw(){
   
    image(webcam,0,0,680,520)
}

function preload(){
    webcam = createCapture(VIDEO)
    webcam.hide()   
}

function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('object_detect').innerHTML = "Status : Detecting"
    object = document.getElementById('object_name').value
}
function modelLoaded(){
    console.log('Model loaded!')
    status = true;
}