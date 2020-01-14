var possibleFruits;
var fruit;


function preload(){
	//create an array of fruit image file names
	possibleFruits = [
		  "./images/banana.png",
      "./images/orange.png",
      "./images/apple.png",
      "./images/dragonfruit.png",
      "./images/pineapple.png",
    ];



}

function setup() {
  createCanvas(windowWidth, windowHeight);
	//pick a random fruit image
	var pos = floor(random(possibleFruits.length));
	//load the picked image
	fruit = loadImage(possibleFruits[pos]);
}

function draw() {
  background('white');

  push();
  var myText = "Shake to find out what fruit you are. Wait bit, the image takes a while to load. sorry";
  drawingContext.font = "60px";
  fill('black');
  text(myText, 10, 50);
  pop();

  image(fruit, windowWidth/2.6, windowHeight/6,300,300);

}


function deviceShaken() {

  //pick a random fruit image
  var pos = floor(random(possibleFruits.length));
  //load the picked image
  fruit = loadImage(possibleFruits[pos]);

}

function touchEnded() {
    DeviceOrientationEvent.requestPermission();
}
