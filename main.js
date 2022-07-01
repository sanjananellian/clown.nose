nosex=0
nosey=0
function preload(){
img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center();
    video=createCapture(VIDEO)
    video.size(500,500)
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotposes)

}
function modelloaded(){
console.log("modelloaded")

}
function gotposes(results){
if (results.length>0) {
    console.log(results)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    console.log("nosex="+results[0].pose.nose.x)
    console.log("nosey="+results[0].pose.nose.y)
}
}


function  draw(){
image(video,0,0,500,500)
fill(255,0,0);
stroke(255,0,0)
circle(nosex,nosey,25)
image(img,nosex-15,nosey-15,30,30)

}

function takepic(){
    save("clown_nosefilter.jpg")
}