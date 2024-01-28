// 全局变量
// -------------------------------------------------------------
let fake_canvas_width = 1400;
let fake_canvas_height = 700;
let line_padding = 3;
// 场景编号
let stage = 0;
let stage_1 = 0;
let stage_2 = 0;
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
let Framecount2_1 = 500;
let Framecount2_2 = 500;
let Framecount3_1 = 500;
let Framecount3_2 = 520;

//分数牌坐标
let scoreY;
let scenario;

let maxFrame = 0;
let lastCheck = 0;
let index = 0;
let p = 0;



// 初始化
// -------------------------------------------------------------
function setup() {
    Canvas = createCanvas(1400, 700);
    Canvas.position(windowWidth/2-700,windowHeight/2-350);
    Canvas.style('z-index','-1');

    // BY 伊老师
    angleMode(DEGREES);
    barX = width-60;
    barY = height/2-barHeight/2;
    arrowY = barY;
    human.humanX = width/2;

    scoreY = height;

    justload();
}


// 主要Loop
// -------------------------------------------------------------
function draw() {
    background(255);
    // 画面切换
    switch(stage){
        // Stage 1 - 跳台上，准备跳水
        case 0:
          if(keyIsPressed){
              if(keyCode == 32){
                stage_1 = 1;
              } 
            }
          if(stage_1 === 1){
            playWhistle();
            image(background_1, 0, 0);
            image(jump_gif, 0, 0);
            framecount++;
          }else{
            image(background_1, 0, 0);
            image(fountLayer_1, 0, 0);
          }
          if(framecount > 96){
            stage += 1;
          }
          logHtml('');
        break;
        
        // Stage 2 - 跳水时，正在下落
        case 1:
            // 伊老师main游戏part
            image(background_2,0,0);
            heightBar();
            human.update();
            human.show();

            scenario = int(random(1,4));

            // human.state = 1;
            // human.rotationAngle = 270;
            if(arrowY >= barY+barHeight){human.determain();}
            if( human.score == 0 ) result = 0;
            else result = 1;
            break;
            

        // Stage 3 - 落地后，落地动作
        case 2:
          image(background_3, 0, 0);
            humanPos(scenario);
            if(p <20){
              p += 1;
              preChooseing();
            }else{
              // 金老师 选择part
              caseChose();
            }

          break;

        case 3:
          image(background_3, 0, 0);
          afterChooseing();
          logHtml('Press Space Bar to reset');
          if(keyIsPressed){
            if(keyCode == 32){
              reset();
            } 
          }
        break;
        
    }
}


// 函数构建
// -------------------------------------------------------------
// 跟随浏览器画框更新画面大小
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

// 预留测试 & debug
function mousePressed() {
    // console.log('skip');
    // if(stage < 4){
    //     stage += 1;
    // }else{
    //     stage = 0;
    // }
    reset();
}

// 改变HTML文本信息
function logHtml(input){
    document.getElementById('1').innerHTML=input;
}

// 加载gif
function justload() {
    fountLayer_1 = loadImage('res/0.png');
    background_1 = loadImage('res/background_1.png');
    background_2 = loadImage('res/background_2.png');
    background_3 = loadImage('res/background_3.png');

    jump_gif = loadImage('res/jump_1.gif');
  
    
    gif1_1 = loadImage('res/run_1.gif');
    gif1_2 = loadImage('res/run_2.gif');
    gif2_1 = loadImage('res/interview_1.gif');
    gif2_2 = loadImage('res/interview_2.gif');
    gif3_1 = loadImage('res/shoot_1.gif');
    gif3_2 = loadImage('res/shoot_2.gif');
      
    scene1_1 = loadImage('res/run_1.png');
    scene1_2 = loadImage('res/run_2.png');
    scene2_1 = loadImage('res/interview_1.png');
    scene2_2 = loadImage('res/interview_2.png');
    scene3_1 = loadImage('res/shoot_1.png');
    scene3_2 = loadImage('res/shoot_2.png');
      
    score0 = loadImage('res/score0.png');
    score8 = loadImage('res/score8.png');
    score9 = loadImage('res/score9.png');
    score10 = loadImage('res/score10.png');

    prs1_1 = loadImage('res/run_1m-0.png');
    prs1_2 = loadImage('res/run_2m-0.png');
    prs2_1 = loadImage('interview_1m-0.png');
    prs2_2 = loadImage('interview_2m-0.png');
    prs3_1 = loadImage('res/shoot_1m-0.png');
    prs3_2 = loadImage('res/shoot_2m-0.png');
    

    img1 = loadImage('res/bend.png');
    img2 = loadImage('res/straight.png');


  }

// 重置游戏
function reset(){
    stage = 0;
    stage_1 = 0;
    stage_2 = 0;

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

    lastCheck = 0;
    index = 0;
    maxFrame = 0;
    p = 0;


    jump_gif.reset();
    gif1_1.reset();
    gif1_2.reset();
    gif2_1.reset();
    gif2_2.reset();
    gif3_1.reset();
    gif3_2.reset();

    soundReset();
}

function showScore(){
  switch(human.score){
    case 0:
      logHtml('');
      playLaughAt();
      image(score0, width/2, scoreY);
      if(scoreY>height/2) scoreY--;
      else {
        stage++;
        scoreY=height;
      }
      break;
    case 8:
      playHandClap();
      image(score8, width/2, scoreY);
      if(scoreY>height/2) scoreY--;
      else {
        stage++;
        scoreY=height;
      }
      break;
    case 9:
      playHandClap();
      image(score9, width/2, scoreY);
      if(scoreY>height/2) scoreY--;
      else {
        stage++;
        scoreY=height;
      }
      break;
    case 10:
      playHandClap();
      image(score10, width/2, scoreY);
      if(scoreY>height/2) scoreY--;
      else {
        stage++;
        scoreY=height;
      }
      break;
  }
}

// Gif逐帧播放
function playGif(input_gif){
  maxFrame = input_gif.numFrames() - 1;
  let currentTime = millis();
  if(currentTime-lastCheck>=30){
      index += 1;
      lastCheck = currentTime;
  }
  input_gif.setFrame(index);
  image(input_gif, 0, 0);
}

// BY 金老师
function caseChose(){
  switch(scenario){
    case 1:
      //场景1
      if(result==0){
          //场景1-结果：失败
          if(framecount<Framecount1_1){
             //动画-播放
             playFalling();
            image(gif1_1, 0, 0);
            // logHtml('1fing');
             framecount++;
          }else{
             //动画-结束
             image(scene1_1, 0, 0);
            // logHtml('1fed');
             showScore();
          }
      }else{
        //场景1-结果：成功
          if(framecount<Framecount1_2){
             //动画-播放
             playFalling();
             image(gif1_2, 0, 0);
            // logHtml('1sing');
             framecount++;
          }else{
             //动画-结束
             image(scene1_2, 0, 0);
            // logHtml('1sed');
             showScore();
          }
      }
      break;
    case 2:
      //场景2
      if(result==0){
          //场景2-结果：失败
          if(framecount<Framecount2_1){
             //动画-播放
             playCameraShots();
             image(gif2_1, 0, 0);
            // logHtml('2fing');
             framecount++;
          }else{
             //动画-结束  
             image(scene2_1, 0, 0);
            // logHtml('2fed');
             showScore();
          }
      }else{
        //场景1-结果：成功
          if(framecount<Framecount2_2){
             //动画-播放
             playCameraShots();
             image(gif2_2, 0, 0);
            // logHtml('2sing');
             framecount++;
          }else{
             //动画-结束
             image(scene2_2, 0, 0);
            // logHtml('2sed');
             showScore();
          }
      }
      break;
    case 3:
      //场景3
      if(result==0){
          //场景3-结果：失败
          if(framecount<Framecount3_1){
             //动画-播放
             playCamera();
             image(gif3_1, 0, 0);
            // logHtml('3fing');
             framecount++;
          }else{
             //动画-结束
             image(scene3_1, 0, 0);
            // logHtml('3fed');
             showScore();
          }
      }else{
        //场景3-结果：成功
          if(framecount<Framecount3_2){
             //动画-播放
             playCamera();
             image(gif3_2, 0, 0);
            // logHtml('3sing');
             framecount++;
          }else{
             //动画-结束
             image(scene3_2, 0, 0);
            // logHtml('3sed');
             showScore();
          }
      }
      break;
  }
  // logHtml(human.score);
}

function preChooseing(){
  switch(scenario){
    case 1:
      //场景1
      if(result==0){
          //场景1-结果：失败
          image(prs1_1, 0, 0);
      }else{
        //场景1-结果：成功
        image(prs1_2, 0, 0);
      }
      break;
    case 2:
      //场景2
      if(result==0){
          //场景2-结果：失败
          image(prs2_1, 0, 0);
      }else{
        //场景1-结果：成功                                                                                        
        image(prs2_2, 0, 0);
      }
      break;
    case 3:
      //场景3
      if(result==0){
          //场景3-结果：失败
          image(prs3_1, 0, 0);
      }else{
        //场景3-结果：成功
        image(prs3_2, 0, 0);
      }
      break;
  }
}

function humanPos(whatCase){
  switch(whatCase){
    case 1:
      if(human.humanY<height-100){
        // 伊老师main游戏part
        push();
        imageMode(CENTER);
        translate(human.humanX,human.humanY);
        rotate(human.rotationAngle);
        if(human.state == 0){
          image(img1,0,0);
        }else{
          image(img2,0,0);
        }
        pop();
        human.humanY += human.humanSpeed;
        }else{
          p = 50;
        }
      break;

    case 2:
      if(human.humanY<height/5*2){
        // 伊老师main游戏part
        push();
        imageMode(CENTER);
        translate(human.humanX,human.humanY);
        rotate(human.rotationAngle);
        if(human.state == 0){
          image(img1,0,0);
        }else{
          image(img2,0,0);
        }
        pop();
        human.humanY += human.humanSpeed;
        }else{
          p = 50;
        }
      break;

    case 3:
      if(human.humanY<height/4){
        // 伊老师main游戏part
        push();
        imageMode(CENTER);
        translate(human.humanX,human.humanY);
        rotate(human.rotationAngle);
        if(human.state == 0){
          image(img1,0,0);
        }else{
          image(img2,0,0);
        }
        pop();
        human.humanY += human.humanSpeed;
        }else{
          p = 50;
        }
      break;
  }
  

}
function afterChooseing(){
  switch(scenario){
    case 1:
      //场景1
      if(result==0){
          //场景1-结果：失败
          image(scene1_1, 0, 0);
      }else{
        //场景1-结果：成功
        image(scene1_2, 0, 0);
      }
      break;
    case 2:
      //场景2
      if(result==0){
          //场景2-结果：失败
          image(scene2_1, 0, 0);
      }else{
        //场景1-结果：成功                                                                                        
        image(scene2_2, 0, 0);
      }
      break;
    case 3:
      //场景3
      if(result==0){
          //场景3-结果：失败
          image(scene3_1, 0, 0);
      }else{
        //场景3-结果：成功
        image(scene3_2, 0, 0);
      }
      break;
  }
}