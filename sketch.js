var blockR,blockL;
var box,ground;
var Ypos = 800;
var blockR1;
var blockG;
var bg1,bg2;
var back;

function preload(){
	bg1 = loadImage("images/background.jpg");
	bg2 = loadImage("images/background2.jpg");
}

function setup() {
	createCanvas(500, 800);
	back = createSprite(250,400,500,800);
	back.scale = 3;
	back.addImage("BG1",bg2);
	box = createSprite(250,250,50,50);
	ground = createSprite(250,795,500,10);
	ground.shapeColor = color("red");
	blockG = new Group();


}

function draw() {
	background("blue");
	box.debug = true;
	back.velocityY = -3;
	if(back.y<40){
		back.y = 400;
	}

	// box.setCollider("rectangle", 0, 0, 60, 80);

	if(keyDown("up") && box.y>740){
		box.velocityY = box.velocityY - 5;
	}
	box.velocityY = box.velocityY + 0.8;
	spawnblocks();
	// for (i = 0; i <= blockG.length; i++){
	// 	if(blockG[i].isTouching(box)){
	// 		blockG[i].velocityX = 0;
	// 		console.log(blockG[i]);
	// 	}
	// }
	box.collide(ground);
	drawSprites();
}

function spawnblocks (){
	//Right side 
	if(frameCount % 50 === 0){
	Ypos=Ypos-20;
	blockR = createSprite(510,Ypos,90,40);
	blockR.velocityX = -6;
	// blockR.debug = true;
	blockG.add(blockR);
	console.log(blockG);
	for (i = 0; i < blockG.length; i++){
		if(blockG[i].isTouching(box)){
			blockG[i].velocityX = 0;
			box.y = blockG[i].y -40;
			box.x = blockG[i].x;
			box.velocityY = 0;
			console.log(blockG[i]);
		}
	}
		
	}
}