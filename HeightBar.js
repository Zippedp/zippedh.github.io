// By 伊老师

let barWidth = 20;
let barHeight = 400;
let arrowY = 0;
let barX = 0;
let barY = 0;

function heightBar(){
  push();
  noStroke();
  fill(160);
  rect(barX,barY,barWidth,barHeight);
  pop();//高度条底座框
  
  push();
  noStroke();
  fill(200,0,0);
  triangle(barX+barWidth,arrowY,barX+barWidth*2,arrowY-10,barX+barWidth*2,arrowY+10);
  pop();//高度条指针
  
  push();
  noStroke();
  fill(100,0,0);
  rect(barX,barY,barWidth,arrowY-barY); 
  pop();//高度进度条
  
  if(human.humanY>=height/2&&arrowY<=barY+barHeight){
    arrowY=map(human.actualHeight-height/2,0,boardHeight,barY,barY+barHeight);
  }//当人下降到四分之一画面高度时，人在画面中静止，
  
}