
// Call in preload
class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 128;
        this.h = 128;
        this.Player = new Sprite(x,y, this.w,this.h);
        this.Player.debug = true;
        this.direction = 'right';
        this.speed = 5;

    }// constructor ends


    // call in setup
    loadAnimation(){
        //load Animation
        idleAni = loadAnimation('PlayerAnimation/idle_2.png', { frameSize: [this.w, this.h], frames: 3 });
        runAni = loadAnimation('PlayerAnimation/Run.png', { frameSize: [this.w, this.h], frames: 8 });
        runLeftAni = loadAnimation('PlayerAnimation/Run_Left.png', { frameSize: [this.w, this.h], frames: 8 });
        
        //Setting Delays
        runAni.frameDelay = 4;
        runLeftAni.frameDelay = 4;
        idleAni.frameDelay = 10;
        
    }
    // call in draw
    playAnimation(ani){
        if (ani == 'idle'){
            idle = animation(idleAni, this.x, this.y);
        }
        else if(ani == 'run'){
            run = animation(runAni, this.x, this.y);
        }
        else if(ani == 'runLeft'){
            runLeft = animation(runLeftAni, this.x, this.y);
        }
    }
    
    movement(){
        if(kb.pressing('right')){
            this.playAnimation('run');
            this.direction = 'right';
            this.Player.mirror.x = false;
            this.x += this.speed;
        }
        else if(kb.pressing('left')){
            this.playAnimation('runLeft');
            this.direction = 'left';
            this.speed;
            this.Player.mirror.x = true;
            this.x -= this.speed;
        }
        else{
            this.playAnimation('idle');


        }
}

}// class Player ends