class Block{
  constructor(x, y, width, height) {
      var options = {
        friction:1.2
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("block.png")
      this.visiblity=255;
    }
    display(){
      if(this.body.speed<3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
        push()
        tint((135,206,235),this.visiblity)
        this.visiblity=this.visiblity-5;
        image(this.image,this.body.position.x,this.body.position.y)
        pop()
      }
      
    }
}