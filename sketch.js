
// Player Animation variable init
let idleAni;
let idle;
let runAni;
let run;
let runLeftAni;
let runLeft;

//Enemy Animation variable init
let flyAni;
let fly;

function preload() {
  player = new Player(200,200);
  enemy = new Enemy(400,400);
}


function setup() {
  createCanvas(800, 800);
  player.loadAnimation();
  enemy.loadAnimation();
  
}

function draw() {
  background(0);
  enemy.movement();
  player.movement();
  
  
}