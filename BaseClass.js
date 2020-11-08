class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':0.0
            //'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    rectMode(CENTER);
    //fill("gray");
    rect(pos.x, pos.y, this.width, this.height);
      }
}