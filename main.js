function setup(){
    c1=createCanvas(740,520)
    c1.center()
    mymodel=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Detection Started"
}
p1=""
status=""
objects=[]
function preload(){
    p1=loadImage("dog_cat.jpg")
} 
function modelLoaded(){
    console.log("Model loaded")
    status=true
    mymodel.detect(p1,gotResult)
}
function gotResult(error,results){
    if(error)
        {console.log(error)}
    else{console.log(results)
    objects=results
    }

}
function draw(){
image(p1,0,0,740,520)
if(status !=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Detection Completed!"
        p=floor(objects[i].confidence*100)
        stroke("green")
        text(objects[i].label+" "+p+"%",objects[i].x,objects[i].y)
        noFill()
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}
}