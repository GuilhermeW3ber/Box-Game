class Cube 
{
  constructor(x, y, w, h) 
{
    let options = {
        restitution:0
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.cubeImg=loadImage("cube.png");
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(1);
    fill("white");
    imageMode(CENTER);
    image(this.cubeImg, 0, 0, this.w, this.h);
    noStroke();
    pop();
  }
}