
// Player Animation variables init
let idleAni, runAni,runLeftAni;
let idle, run,runLeft;
let player;



//Enemy Animation variables init
let enemy;
let flyAni;
let fly;

//scene
let rect1, rect2;
let sceneChange = false;

function preload() {
  player = new Player(200,200);
  enemy = new Enemy(400,400, player);
  player.loadAnimation();
  enemy.loadAnimation();
  
}


function setup() {
  createCanvas(800, 800);
 
}

function draw() {
  clear();
  background(0);
  enemy.movement();
  player.movement();
  // console.log(enemy.checkCollision());
  if(enemy.collision()){
    sceneChange = true;
    if(sceneChange){
      changeScene(800,800);
      sceneChange = false;
    }
    inBattle();

  }
  
}