// 全局变量
// -------------------------------------------------------------
let fake_canvas_width = 1400;
let fake_canvas_height = 700;
let line_padding = 3;
// 场景编号
let stage = 0;
let stage_1 = 0;
// Player对象&数据
let diver_obj;
// 临时变量
let diver_pos_x;
let diver_pos_y;

// By 伊老师
let gravity =0.1;
let boardHeight = 3500;
let img1;
let img2;

// BY 金老师
let result = 0;
let resultState = 0;

//记录当前播放的gif已播放的帧数
let framecount = 0;
let Framecount1_1 = 361;
let Framecount1_2 = 361;
let Framecount2_1 = 361;
let Framecount2_2 = 361;
let Framecount3_1 = 361;
let Framecount3_2 = 361;

//分数牌坐标
let scoreY;
let scenario;

let human;
let barHeight = 400;
let arrowY = 0;
let barX = 0;
let barY = 0;


// canvas 创建
// -------------------------------------------------------------
// canvas 1 - 跳台
var s1 = function(s) {
    s.setup = function() {
        let canvas1 = s.createCanvas(425, 220);
        canvas1.position(0,0);
        fountLayer_1 = s.loadImage('res/0.png');
        background_1 = s.loadImage('res/background_1.png');
        jump_gif = s.loadImage('res/jump_1.gif');
    }
    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
        switch(stage){
            // Stage 1 - 跳台上，准备跳水
            case 0:
                background_1.resize(0, 250);
                s.image(background_1, 0, 0);
                if(s.keyIsPressed){
                    if(s.keyCode == 32){
                        stage_1 = 1;
                    } 
                }
                if(stage_1 === 1){
                    jump_gif.resize(0, 250);
                    s.image(jump_gif, 0, 0);
                    framecount++;
                }else{
                    fountLayer_1.resize(0, 250);
                    s.image(fountLayer_1, 0, 0);
                }
                if(framecount > 27){
                    stage += 1;
                }
                break;
            
            // Stage 2 - 跳水时，正在下落
            case 1:
                break;
                
            // Stage 3 - 落地后，落地动作
            case 2:
              break;
        
            // Stage 4 
            case 3:
                break;
        }
    }
};

// canvas 2 - 下落
var s2 = function(s) {
    s.setup = function() {
        let canvas2 = s.createCanvas(290, 290);
        canvas2.position(100,220);
        background_2 = s.loadImage('res/background_2.png');

        human = {
            humanHeight : 100,
            humanWidth : 10,
            humanX : 0,
            humanY : -10,//人在屏幕上的高度
            humanSpeed : 5,
            actualHeight : 0,//人物的实际物理高度
            state : 1,
            angle : 0,
            keyStatement:0,
            rotationSpeed : 3,
            rotationAngle:0,
            score : 0,
            
            update(){
              this.humanSpeed+=gravity;
              
              if(this.humanY<=s.height/2){
                this.humanY+=this.humanSpeed;
                this.actualHeight = this.humanY;
              }else if(arrowY>=barY+barHeight){
                  this.humanY+=this.humanSpeed;     
              }else{
                this.actualHeight += this.humanSpeed;
              }
              
              //速度及加速度
              
              if(this.humanY>=s.height+this.humanHeight){
                this.humanY = -10;
                // this.humanSpeed = 3;
                this.actualHeight = 0;
                arrowY = barY;
                // this.rotationAngle = 0;
                // this.state = 1;
                stage += 1;
              }//归零
            },  
            
            show(){
              if(arrowY<=barY+barHeight){
              if(s.keyIsPressed){
                if(s.keyCode ==32){
                  this.state = 0;
                }
              }else{
                this.state = 1;
              } 
            }
              
          
              
              s.push();
            //   s.rectMode(s.CENTER);
            //   s.imageMode(s.CENTER);
              s.translate(this.humanX,this.humanY);
              s.rotate(this.rotationAngle);
            
              if(this.state == 1){
                s.rect(0,0,this.humanWidth,this.humanHeight);
                s.image(img2,0,0);
                if(arrowY<=barY+barHeight){
                  if(this.rotationSpeed>3){
                    this.rotationSpeed -= 0.2;
                  }
                this.rotationAngle += this.rotationSpeed;
                }
              }else if(this.state == 0){
                s.rect(0,0,this.humanWidth,this.humanHeight/2);
                s.image(img1,0,0);
                if(arrowY<=barY+barHeight){
                  if(this.rotationSpeed < 10){
                    this.rotationSpeed += 0.3;
                  }
                this.rotationAngle += this.rotationSpeed;
                }
              }
              s.pop();  
            },
          
            determain(){
              
              this.state=0;
          
              if(1){
                if(this.state==1){
                  this.score = 0;
                }else{
                  let difference = abs((this.rotationAngle-60)%360-270);
                  if(difference > 60){
                    this.score = 0;
                  }else if(difference>30 && difference <= 60){
                    this.score = 8;
                  }else if(difference>15 && difference <= 30){
                    this.score = 9;
                  }else{
                      this.score = 10;
                    }
                             
                  }
                }
              }
            }
    }
    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
        switch(stage){
            // Stage 1 - 跳台上，准备跳水
            case 0:
                break;
            
            // Stage 2 - 跳水时，正在下落
            case 1:
                // 伊老师main游戏part
                background_2.resize(0, 300);
                s.image(background_2,-50,0);
                let barWidth = 20;

  s.push();
  s.noStroke();
  s.fill(160);
  s.rect(barX,barY,barWidth,barHeight);
  s.pop();//高度条底座框
  
  s.push();
  s.noStroke();
  s.fill(200,0,0);
  s.triangle(barX+barWidth,arrowY,barX+barWidth*2,arrowY-10,barX+barWidth*2,arrowY+10);
  s.pop();//高度条指针
  
  s.push();
  s.noStroke();
  s.fill(100,0,0);
  s.rect(barX,barY,barWidth,arrowY-barY); 
  s.pop();//高度进度条
  
  if(human.humanY>=s.height/2&&arrowY<=barY+barHeight){
    arrowY=map(human.actualHeight-s.height/2,0,boardHeight,barY,barY+barHeight);
  }//当人下降到四分之一画面高度时，人在画面中静止，
  
                human.update();
                human.show();

                scenario = int(random(1,4));
                human.determain();
                if( human.score == 0 ) result = 0;
                else result = 1;
                break;
                
            // Stage 3 - 落地后，落地动作
            case 2:
              break;
        
            // Stage 4 
            case 3:
                break;
        }
    }
}

// canvas 3 - 地面
var s3 = function(s) {
    s.setup = function() {
        let canvas2 = s.createCanvas(415, 290);
        canvas2.position(50,510);
    }
    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
        switch(stage){
            // Stage 1 - 跳台上，准备跳水
            case 0:
                break;
            
            // Stage 2 - 跳水时，正在下落
            case 1:
                break;
                
            // Stage 3 - 落地后，落地动作
            case 2:
              break;
        
            // Stage 4 
            case 3:
                break;
        }
    }
};

// canvas 4 - 观众席(打分)
var s4 = function(s) {
    s.setup = function() {
        let canvas2 = s.createCanvas(430, 220);
        canvas2.position(580,290);
    }
    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
    }
};

// canvas 0 - 定位背景
var s5 = function(s) {
    s.setup = function() {
        let canvas1 = s.createCanvas(800, 800);
        canvas1.position(0,0);
    }
    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
    }
};

new p5(s5);

new p5(s1);

new p5(s2);

new p5(s3);

// new p5(s4);

// 函数构建
// -------------------------------------------------------------
function preload() {
    fountLayer_1 = loadImage('res/0.png');
    background_1 = loadImage('res/background_1.png');
    background_2 = loadImage('res/background_2.png');
    jump_gif = loadImage('res/jump_1.gif');
}

  // 重置游戏
function reset(){
    stage = 0;
    stage_1 = 0;

    barWidth = 10;
    barHeight = 250;
    arrowY = 0;
    barX = 0;
    barY = 0;

    diver_pos_x = width/2-fake_canvas_width/2+30;
    diver_pos_y = height/2-fake_canvas_height/2+80;

    barX = width-40;
    barY = height/2-barHeight/2;
    arrowY = barY;
    human.humanX = width/2;
    human.humanY = -10;

    human.humanSpeed = 3;
    human.rotationAngle = 0;
    human.state = 1;

    framecount=0;

    jump_gif.reset();
    outcome_gif.reset();
    outcome_gif_2.reset();
    gif1_1.reset();
    gif1_2.reset();
    gif2_1.reset();
    gif2_2.reset();
    gif3_1.reset();
    gif3_2.reset();
}

// By 伊老师
function heightBar(){
    
}

// 对象构建
// -------------------------------------------------------------
// By 伊老师


  
    
  