function preload(){

}
function setup(){
canvas= createCanvas(550,550);
canvas.center()
video= createCapture(VIDEO);
video.size(550, 550)
}
function draw(){
    circle(30, 50, 50); 
    circle(40,20,55)
    square(55,100,100,100)
    arc(50,30,60,20,75)
}