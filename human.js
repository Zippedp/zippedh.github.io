// By 伊老师

let human = {
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
    
    if(this.humanY<=height/2){
      this.humanY+=this.humanSpeed;
      this.actualHeight = this.humanY;
    }else if(arrowY>=barY+barHeight){
        this.humanY+=this.humanSpeed;     
    }else{
      this.actualHeight += this.humanSpeed;
    }
    
    //速度及加速度
    
    if(this.humanY>=height+this.humanHeight){
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
    if(keyIsPressed){
      if(keyCode ==32){
        this.state = 0;
      }
    }else{
      this.state = 1;
    } 
  }
    

    
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    translate(this.humanX,this.humanY);
    rotate(this.rotationAngle);
  
    if(this.state == 1){
      // rect(0,0,this.humanWidth,this.humanHeight);
      image(img2,0,0);
      if(arrowY<=barY+barHeight){
        if(this.rotationSpeed>3){
          this.rotationSpeed -= 0.2;
        }
      this.rotationAngle += this.rotationSpeed;
      }
    }else if(this.state == 0){
      // rect(0,0,this.humanWidth,this.humanHeight/2);
      image(img1,0,0);
      if(arrowY<=barY+barHeight){
        if(this.rotationSpeed < 10){
          this.rotationSpeed += 0.3;
        }
      this.rotationAngle += this.rotationSpeed;
      }
    }
    pop();  
  },

  determain(){

    if(1){
      if(this.state==1){
        this.score = 0;
      }else{
        let difference = abs((this.rotationAngle-60)%360-270);
        if(difference > 75){
          this.score = 0;
        }else if(difference>45 && difference <= 75){
          this.score = 8;
        }else if(difference>15 && difference <= 45){
          this.score = 9;
        }else{
            this.score = 10;
          }
                   
        }
      }
    }
  }

  
