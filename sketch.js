var possibleFruits;
var fruit;


function preload(){
	//create an array of fruit image file names
	possibleFruits = [
		  "/images/banana.png",
      "/images/orange.png",
      "/images/apple.png",
      "/images/dragonfruit.png",
      "/images/pineapple.png",
    ];

    //pick a random fruit image
  	var pos = floor(random(possibleFruits.length));
    //
  	//load the picked image
  	// fruit = loadImage(possibleFruits[pos]);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('white');
  image(fruit, windowWidth/2.6, windowHeight/6,300,300);

  push();
  var myText = "Shake to find out what fruit you are";
  drawingContext.font = "60px";
  fill('black');
  text(myText, width / 2.3, 50);
  pop();
}


function deviceShaken() {
  fruit = loadImage(possibleFruits[pos]);
}

function touchEnded() {
    DeviceOrientationEvent.requestPermission()
}
