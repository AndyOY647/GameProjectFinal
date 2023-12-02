let idleAni;
let idle;
let runAni;
let run;
let runLeftAni;
let runLeft;

function preload() {
  player = new Player(200,200);
}


function setup() {
  createCanvas(800, 800);
  player.loadAnimation();
  
}

function draw() {
  background(0);
  player.movement();
  
}