function changeScene(screenWidth, screenHeight){
    fill(255,255,255);
    rect1 = rect(-1, 0, screenWidth, screenHeight/2);
    rect2 = rect(screenWidth+1, screenHeight/2, screenWidth, screenHeight/2);

    rect1.x +=1;
    rect2.x -=1;

    if(rect1.x >= screenWidth && rect2.x <= 0){
        rect1.x = -1;
        rect2.x = screenWidth+1;
    }
}

function inBattle(){

}