class Player{
    constructor(){
        this.x_offset= 128;
        this.y_offset = 100;
        this.Player = new Sprite(400,400, 128,100);
        this.Player.spriteSheet = 'player.png';
        this.Player.anis.offset.x = 0;
        this.Player.anis.offset.y = 0;
        this.Player.anis.frameDelay = 10;
        this.Player.debug = true;

        this.Player.addAnis({
            idle: {row: 0, frames: 1},
            runRight: {row: 1, frames: 1},
            runLeft: {row: 2, frames: 1}
        });
        this.player.changeAni('idle');

        
        
    }
}