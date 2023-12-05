class Enemy{
    constructor(x,y, player){
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150;
        this.player = player;
        this.Enemy = new Sprite(x,y, this.w,this.h);
        this.Enemy.debug = true;
        this.speed = 3;
        this.maxHealth = 3;
        this.currentHealth = this.maxHealth;
        
        
    } // constructor ends

    // setup
    loadAnimation(){
        flyAni = loadAnimation('EnemyAnimation/Flight.png', { frameSize: [this.w, this.h], frames: 8 });
        
        flyAni.frameDelay = 4;
    }

    // draw
    playAnimation(ani){
        if(ani == 'fly'){
        fly = animation(flyAni, this.x, this.y);
        }
    }

    movement(){
            this.playAnimation('fly');
    }

    collision(){
        if(this.x+20 < this.player.x + this.player.w &&
            this.x-20 +this.w> this.player.x &&
             this.y+60 < this.player.y + this.player.h &&
             this.y-32 +this.h > this.player.y
            ){
            this.collide = true;
          }else{
            this.collide = false;
          }
        
        return this.collide;
    }

} // class enemy ends