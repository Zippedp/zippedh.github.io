// 全局变量
// -------------------------------------------------------------
let fake_canvas_width = 1000;
let fake_canvas_height = 400;
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
let gravity = 0.09;
let boardHeight = 500;

// 多canvas设置
// -------------------------------------------------------------
// canvas 1 - 跳台
var s1 = function(s) {
    s.setup = function() {
        let canvas1 = s.createCanvas(425, 220);
        canvas1.position(0,0);
        canvas1.style('z-index','-1');
        // 创建对象
        diver_obj = new Diver();
        // 临时变量
        diver_pos_x = 0;
        diver_pos_y = 30;
    }

    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);

        // 初始动画
        if(diver_pos_x < s.width/3){
            diver_pos_x += 1;
        }else{
            diver_pos_x = diver_pos_x;
            stage = 1;
        }
        s.ellipse(diver_pos_x, diver_pos_y, 30);
        s.rect(0, 50, s.width/2-s.width/3+15, 10);
    }
};

// canvas 2 - 下落
var s2 = function(s) {
    s.setup = function() {
        let canvas2 = s.createCanvas(290, 290);
        canvas2.position(100,220);
        canvas2.style('z-index','-1');
    }

    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
    }
}

// canvas 3 - 地面
var s3 = function(s) {
    s.setup = function() {
        let canvas3 = s.createCanvas(415, 290);
        canvas3.position(50,510);
        canvas3.style('z-index','-1');
    }

    s.draw = function() {
        s.background(240);
        s.rect(0, 0, s.width, s.height);
    }
};


// 主要Loop
// -------------------------------------------------------------
// function draw() {
//     background(255);
//     // 画面切换
//     switch(stage){
//         // Stage 0 - 跳台上，开场动画
//         case 0:
//             // // 假画框 with padding
//             // fill(240);
//             // strokeWeight(3);
//             // stroke(0);
//             // rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);
            
//             // strokeWeight(line_padding*2);
//             // stroke(240);
//             // rect(width/2-fake_canvas_width/2+line_padding, height/2-fake_canvas_height/2+line_padding, fake_canvas_width-line_padding*2, fake_canvas_height-line_padding*2);
//             // strokeWeight(1);
//             // stroke(0);

//             // 假画框
//             fill(240);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);

//             // 初始动画
//             if(diver_pos_x < width/3){
//                 diver_pos_x += 1;
//             }else{
//                 diver_pos_x = diver_pos_x;
//                 stage = 1;
//             }
//             ellipse(diver_pos_x, diver_pos_y, 30);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2+95, width/2-width/3+15, 10);
//             logHtml(0);
//             break;

//         // Stage 1 - 跳台上，准备跳水
//         case 1:
//             // 假画框
//             fill(240);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);

//             switch(stage_1){
//                 // 按空格前
//                 case 0:
//                     ellipse(diver_pos_x, diver_pos_y, 30);
//                     rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2+95, width/2-width/3+15, 10);
            
//                     if(keyIsPressed){
//                         if(keyCode == 32){
//                             stage_1  = 1;
//                         }     
//                     }
//                     logHtml(1);
//                     break;
                
//                 // 按空格后
//                 case 1:
//                     if(keyIsPressed){
//                         if(keyCode == 32){
//                             ellipse(diver_pos_x, diver_pos_y,60);
//                         }
//                     }else{
//                         if(diver_pos_y < height/2+fake_canvas_height/2){
//                             diver_pos_y += 3     ;
//                         }else{
//                             diver_pos_y = diver_pos_y;
//                             // stage = 2;
//                             logHtml(2);
//                         }
//                         ellipse(diver_pos_x, diver_pos_y, 30);
//                     }
//                     break;
//             }
//             break;
        
//         // Stage 2 - 跳水时，正在下落
//         case 2:
//             // 假画框
//             fill(240);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);
//             // image(gif, width/2-200, height/2-283);
//             heightBar();
//             human.update();
//             human.show();
//             break;

//         // Stage 3 - 落地后，落地动作
//         case 3:
//             // 假画框
//             fill(240);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);
//             logHtml('Animation~');
//             image(gif_2, width/2-128, height/2-96);
//             break;

//         // Stage 3 - 落地后，表情反馈
//         case 4:
//             // 假画框
//             fill(240);
//             rect(width/2-fake_canvas_width/2, height/2-fake_canvas_height/2, fake_canvas_width, fake_canvas_height);
//             logHtml('Feedback');
//             image(gif_1, width/2-270, height/2-270);
//             break;

//     }
// }


// Class构建
// -------------------------------------------------------------
class Diver{
    constructor(){
        // 零时设置
        this.posX = 0;
        this.posY = 0;
    }

    update(){
        
    }

    show(){
        // 零时设置
        ellipse(this.posX, this.posY, 30);
    }
}

// 函数构建
// -------------------------------------------------------------
// 跟随浏览器画框更新画面大小
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// 预留测试 & debug
function mousePressed() {
    // console.log('skip');
    // if(stage < 4){
    //     stage += 1;
    // }else{
    //     stage = 0;
    // }
}

// 改变HTML文本信息
function logHtml(input){
    document.getElementById('1').innerHTML=input;
}

// 临时占位gif
function preload() {
    gif = loadImage('res/temp.gif');
    gif_1 = loadImage('res/temp1.gif');
    gif_2 = loadImage('res/temp2.gif');
  }

// 画布创建
// -------------------------------------------------------------
new p5(s1);
new p5(s2);
new p5(s3);