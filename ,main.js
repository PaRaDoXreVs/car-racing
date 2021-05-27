canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=70;
rover_img="https://i.postimg.cc/YqdnnNX1/car1.png";
rover_X=10;
rover_Y=10;

rover_width=120;
rover_height=70;
rover_img="https://www.pngjoy.com/pngm/60/1323781_car-png-birds-eye-view-car-png-hd.png";
rover_X=10;
rover_Y=100;



background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
function add(){
    Background_ImageTag = new Image();
    Background_ImageTag.onload=uploadBackground;
    Background_ImageTag.src = background_img;
    
    rover_ImageTag = new Image();
    rover_ImageTag.onload=uploadrover;
    rover_ImageTag.src = rover_img;  
}


function uploadBackground(){
    ctx.drawImage(Background_ImageTag,0,0, canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage( rover_ImageTag,rover_X,rover_Y, rover_width,rover_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        Up();
        console.log("Up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }     
      if(keyPressed == '37'){
        left();
        console.log("left");
    }
      if(keyPressed == '39'){
        right();
        console.log("right");
    }
}
