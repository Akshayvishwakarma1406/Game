var blockR,blockL;
var box,ground;
var Ypos = 800;
var blockR1;
var blockG;

function setup() {
	createCanvas(500, 800);
	box = createSprite(250,250,50,50);
	ground = createSprite(250,795,500,10);
	ground.shapeColor = color("red");
	blockG = new Group();
  
}

function draw() {
	rectMode(CENTER);
	background("blue");
	box.debug = true;
	// box.setCollider("rectangle", 0, 0, 60, 80);

	if(keyDown("up") && box.y>740){
		box.velocityY = box.velocityY - 8;
	}
	box.velocityY = box.velocityY + 0.8;

	//Right side 
	if(frameCount % 50 === 0){
	Ypos=Ypos-20;
	blockR = createSprite(510,Ypos,90,40);
	blockR.debug = true;
	blockG.add(blockR);
	blockR.velocityX = -6
	}
	if(blockG.collide(box)){
		blockG.setVelocityYEach(0);
		box.velocityY = 0;
	}

	box.collide(ground);
	drawSprites();
}
