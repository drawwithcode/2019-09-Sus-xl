var possibleFruits;
var fruit;

var heart;




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

  	// //load the picked image
  	// fruit = loadImage(possibleFruits[pos]);

  	//load the heart image
	   heart = loadImage("/images/fruits.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(204);

  // image(fruit, 0, 0);
  // image(heart, random(-10, 10), random(-4, 4), width, height);


}




// --Every time we shake the device, an answer is given
function deviceShaken() {
  fruit = random(possibleFruits);
}
