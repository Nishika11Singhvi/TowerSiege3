class Box2 extends BaseClass 
{
  constructor(x, y, width, height)
  {
    super(x,y,width,height);
    this.image = loadImage("r2.png");
    this.visibility = 225;
  }

  score()
  {
    if(this.visiblity<0 && this.visiblity>-10)
    {
      score++;
    }
  }

  display()
  {
    if(this.body.speed<5)
    {
      super.display();
    }
    else
    {
      World.remove(world,this.body);

      push();
      this.visibility=this.visibility-10;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
    }
  }
};
