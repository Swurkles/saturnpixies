document.addEventListener('keydown', isPressed, false);
document.addEventListener('keyup', isntPressed, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

function turnLeft(lapin){
    if(!fromYToDiagonal()){
    if(lapin.textures != saturn_side) lapin.textures = saturn_side;
    if(lapin.scale.x < 0) lapin.scale.x *= -1;
    }
    lapin.x-= walkSpeed;
}

function turnRight(lapin){
    if(!fromYToDiagonal()){
    if(lapin.textures != saturn_side)lapin.textures = saturn_side;
    if(lapin.scale.x > 0) lapin.scale.x *= -1;
    }
    lapin.x+= walkSpeed;
}

function turnUp(lapin){
    if(lapin.textures != saturn_back && !fromXToDiagonal())lapin.textures = saturn_back;
    lapin.y-= walkSpeed;
}

function turnDown(lapin){
    if(lapin.textures != saturn_neutral && !fromXToDiagonal())lapin.textures = saturn_neutral;
    lapin.y+= walkSpeed;
}

function control(lapin){
        if(rightPressed){
            turnRight(lapin);
        }
        else if(leftPressed){
            turnLeft(lapin);
        }
        if(upPressed){
            turnUp(lapin);
        }
        else if(downPressed){
            turnDown(lapin);
        }

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
function idleAnimation(lapin) {
    if(isMoving()) lapin.animationSpeed = 0.1;
    else lapin.animationSpeed = 0.03;
}
function fromYToDiagonal(){
    return (upPressed || downPressed);
}
function fromXToDiagonal(){
    return (leftPressed || rightPressed);
}