/* The project should have some form of interaction from the user. This can be a mouse click, mouse position or button press.
A decision should be made by using if/else statement. */


let x = 1;
let circleX = 0;
let circleY = 0;


function setup(){
    createCanvas(600,600);
    background("lightblue");

    textSize(16);
    text("Click mouse to add lights then press a key on keyboard!", 20, 20);


    noStroke();
    fill("green");
    triangle(290, 195, 200, 295, 370, 295);
    triangle(290, 250, 170, 365, 405, 365);
    triangle(290, 305, 120, 460, 450, 460);

    fill("#964B00");
    rect(235, 460, 100, 55);

    
  
 
}

function draw(){
    // used to determine x,y coordinates for the shapes
    // fill("red");
    // circle(mouseX,mouseY, 20);
    // print(mouseX, mouseY);
    
}

function mouseClicked(){
        x++;
        print(x);

    if (x > 0 && x < 8){
        circleX = random (237, 330);
        circleY = random (239, 440);
      
        stroke(color(255, 255, 255, 100)); //glow effect
        strokeWeight(3);
        fill("red");
        circle(circleX, circleY, 25);

       } else if (x > 8 && x < 15){
            circleX = random (237, 330);
            circleY = random (239, 440);
          
            fill("yellow");
            circle(circleX, circleY, 25);
           
       } else if (x > 15 && x < 22){
        circleX = random (237, 330);
        circleY = random (239, 440);

        fill("blue");
        circle(circleX, circleY, 25);
        
       }
}

function keyPressed(){
    noStroke();
    fill("lightblue");
    rect(0, 0, 500, 30);
    text("Click mouse to add lights then press a key on keyboard!", 20, 20);
    textSize(50);
    fill("red");
    text('Merry Christmas!', 100, 100);

    stroke(color(255, 255, 255, 100)); //glow effect
    strokeWeight(5);
    fill("yellow");
    beginShape();
        vertex(290, 120); //top point
        vertex(309, 145); //right shoulder
        vertex(350, 155); //right top point
        vertex(314, 174); //right hip
        vertex(340, 210); //right bottom point
        vertex(290, 197); //bottom indent
        vertex(245, 210); //left bottom point
        vertex(270, 173); //left hip
        vertex(235, 160); //left top point
        vertex(274, 145); //left shoulder
        vertex(290, 120); //top point
        endShape();

}