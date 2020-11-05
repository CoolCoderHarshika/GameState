var ball;
var database,position
var form1;
var playerCount=0
var player
var game
var gameState=0




function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game= new Game()
    game.getState()
    game.start()
}
function draw(){
    background("white");
    //drawSprites();
    
}

