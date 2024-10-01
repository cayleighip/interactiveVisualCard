/* The project should have some form of interaction from the user. This can be a mouse click, mouse position or button press.
A decision should be made by using if/else statement. */


let x = 1;
// let y = 1;
let circleX = 0;
let circleY = 0;


function setup(){
    createCanvas(600,600);
    background("lightblue");

    // x = random(170,360);
    // y = random(196,460);

    noStroke();
    fill("green");
    triangle(290, 195, 200, 295, 370, 295);
    triangle(290, 250, 170, 365, 405, 365);
    triangle(290, 305, 120, 460, 450, 460);

    fill("#964B00");
    rect(235, 460, 100, 55);

    text("Click mouse to add lights then press a key on keyboard!", 20, 20);

    fill("yellow");
    beginShape();
        vertex(290, 120); //top point
        vertex(309, 145); //right shoulder(clockwise points)
        vertex(350, 155); //right top point
        vertex(314, 174); //right hip
        vertex(340, 210); //right bottom point
        vertex(290, 197); //bottom indent
        vertex(245, 210); //left bottom point
        vertex(270, 173); //left hip
        vertex(235, 160); //left top point
        vertex(274, 145); //left shoulder
        vertex(290, 120); //top point. muct match starting point if you want the outline to go around the entire shape.
        endShape();
  
 
}

function draw(){
    
    
    
    // fill("red");
    // circle(mouseX,mouseY, 20);
    print(mouseX, mouseY);
    
}

function mouseClicked(){
        x++;
        print(x);

    if (x > 0 && x < 8){
        circleX = random (170, 360);
        circleY = random (195, 460);
      
        fill("red");
        circle(circleX, circleY, 20);

       } else if (x > 8 && x < 15){
            circleX = random (170, 360);
            circleY = random (195, 460);
          
            fill("yellow");
            circle(circleX, circleY, 20);
           
       } else if (x > 15 && x < 22){
        circleX = random (170, 360);
        circleY = random (195, 460);

        fill("blue");
        circle(circleX, circleY, 20);
       } else{
        
       }
}

function keyPressed(){
    textSize(50);
    // background("lightblue");
    text('Merry Christmas!', 100, 100);

}