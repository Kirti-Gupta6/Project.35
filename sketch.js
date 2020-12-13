//Create variables here
var dog, happyDog, database, foodS;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  hdogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

   var foodStock = database.ref('food');
  foodStock.on("value", readStock);
  dog.scale = 0.2;
  
  
}


function draw() {  
 background("coral");
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(hdogImg);
 }
  drawSprites();
  textSize (20);
  fill("purple");
  text ("Press the UP arrow key to feed Yeontan milk!", 70,100)

}
function readStock(data){
  food = data.val();
 
 }
function writeStock(){
  database.ref('/').update({
   Food : x
  })
}

