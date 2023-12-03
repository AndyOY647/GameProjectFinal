class Enemy{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150;
        this.Enemy = new Sprite(x,y, this.w,this.h);
        this.debug = true;
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
        if(kb.pressing('right')){
            this.playAnimation('fly');
            this.direction = 'right';
            this.Enemy.mirror.x = false;
            this.x += this.speed;
        }
    }

} // class enemy ends