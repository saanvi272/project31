class Block{
  constructor(x, y, width, height) {
     var options = {
      'restitution':0.4,
      'friction':0.1
        
      }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  this.visibility=255;
    }
  display(){
    if(this.body.speed<5){
      var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      pop();
    }
   
 }
  score(){
    if(this.visibility<0&&this.visibility>-105){
      score=score+1;
    }


  }
}