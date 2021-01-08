
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

function startInput(){
    window.addEventListener('keydown', isPressed, false);
    window.addEventListener('keyup', isntPressed, false);
}
function stopInput(){
    window.removeEventListener('keydown', isPressed, false);
    window.removeEventListener('keyup', isntPressed, false);
}

function turnLeft(sprite){
    if(!fromYToDiagonal()){
    if(sprite.textures != saturn_side) sprite.textures = saturn_side;
    if(sprite.scale.x < 0) sprite.scale.x *= -1;
    }
}

function turnRight(sprite){
    if(!fromYToDiagonal()){
    if(sprite.textures != saturn_side)sprite.textures = saturn_side;
    if(sprite.scale.x > 0) sprite.scale.x *= -1;
    }
}

function turnUp(sprite){
    if(sprite.textures != saturn_back && !fromXToDiagonal())sprite.textures = saturn_back;
}

function turnDown(sprite){
    if(sprite.textures != saturn_neutral && !fromXToDiagonal())sprite.textures = saturn_neutral;
}

function control(sprite){
        if(rightPressed){
            sprite.vx = walkSpeed; 
            turnRight(sprite);
        }
        else if(leftPressed){
            sprite.vx = 0-walkSpeed;
            turnLeft(sprite);
        }
        if(upPressed){
            sprite.vy = 0-walkSpeed;
            turnUp(sprite);
        }
        else if(downPressed){
            sprite.vy = walkSpeed;
            turnDown(sprite);
        }
        idleAnimation(sprite);
        move(sprite);

}

function isPressed(event){
    switch(event.keyCode){
        case 39:
            rightPressed = true;
        break;
        case 37:
            leftPressed = true;
        break;
        case 40:
            downPressed = true;
        break;
        case 38:
            upPressed = true;
        break;
        case 32:
            spacePressed = true;
        break;
    }
}

function isntPressed(event){
    switch(event.keyCode){
        case 39:
            rightPressed = false;
        break;
        case 37:
            leftPressed = false;
        break;
        case 40:
            downPressed = false;
        break;
        case 38:
            upPressed = false;
        break;
        case 32:
            spacePressed = false;
        break;
    }
}

function isMoving(){
    return (rightPressed || leftPressed 
        || upPressed || downPressed );
}
function idleAnimation(sprite) {
    if(isMoving()) sprite.animationSpeed = 0.1;
    else sprite.animationSpeed = 0.03;
}
function fromYToDiagonal(){
    return (upPressed || downPressed);
}
function fromXToDiagonal(){
    return (leftPressed || rightPressed);
}