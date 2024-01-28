
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
let Framecount2_1 = 361;
let Framecount2_2 = 361;
let Framecount3_1 = 361;
let Framecount3_2 = 361;

//分数牌坐标
let scoreY;
let scenario;

let lastCheck = 0;
let index = 0;

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
}

function draw(){
    background(255);
    playGif(gif1_1);
}

function playGif(input_gif){
    let maxFrame = input_gif.numFrames() - 1;
    let currentTime = millis();
    if(currentTime-lastCheck>=30){
        index += 1;
        lastCheck = currentTime;
    }
    input_gif.setFrame(index);
    image(input_gif, 0, 0);
  }

  function preload() {
    gif1_1 = loadImage('res/run_1.gif');
    gif3_1 = loadImage('res/shoot_1.gif');
  }