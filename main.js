function preload(){

}

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotresult);
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kPJh8O2bC/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotresult(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("result_objectname").innerHTML=results[0].label;
document.getElementById("result_objectaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}