const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var backgroundImg;

function preload() 
{
    getTime();
}

function setup()
{
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,width,20);
    ground1 = new Ground(350,300,200,10);
    ground2 = new Ground(600,200,200,10);

    box1 = new Box(350,280,30,40);
    box2 = new Box2(310,280,30,40);
    box3 = new Box3(406,280,30,40);
    box4 = new Box4(350,280,30,40);
    box5 = new Box5(390,280,30,40);
    box6 = new Box6(290,280,30,40);
    box7 = new Box(395,260,30,40);
    box8 = new Box2(380,260,30,40);
    box9 = new Box3(350,260,30,40);
    box10 = new Box4(310,260,30,40);
    box11 = new Box5(340,240,30,40);
    box12 = new Box6(380,240,30,40);
    box13 = new Box(600,180,30,40);
    box14 = new Box2(580,180,30,40);
    box15 = new Box3(600,180,30,40);
    box16 = new Box4(540,180,30,40);
    box17 = new Box5(620,180,30,40);
    box18 = new Box6(640,180,30,40);
    box19 = new Box(580,160,30,40);
    box20 = new Box2(620,120,30,40);
    box21 = new Box3(588,120,30,40);
    box22 = new Box4(650,120,30,40);
    box23 = new Box5(620,100,30,40);
    box24 = new Box6(590,70,30,40);

    hitter1 = new Hitters(100,200);
    sling1 = new Slings(hitter1.body,{x:100, y:150});
}

function draw()
{
    if(backgroundImg)
    {
      background(backgroundImg);
    }
    Engine.update(engine);

    textSize(20);
    textFont("Bembo");
    strokeWeight(0.0001);
    stroke("magenta");
    fill("magenta");
    text("Press and Drag your Mouse To Release The Polygon",50,50);
    text("Press Space to Hit Again!",50,80);

    fill("white");
    textFont("bembo");
    noStroke();
    textSize(20);
    text("SCORE = "+score,100,350);
    console.log(score);
    
    ground1.display();
    ground2.display();
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box23.display();
    box24.display();

    hitter1.display();
    sling1.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box23.score();
    box24.score();
}

function mouseDragged()
{
    Matter.Body.setPosition(hitter1.body,{x: mouseX, y:mouseY});
}

function mouseReleased()
{
    sling1.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    Matter.Body.setPosition(hitter1.body,{x : 100, y : 200})
    sling1.attach(hitter1.body);
  }
}

async function getTime()
{
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 18)
  {
    bg="night.png";
  }
  else
  {
    bg="day.png";
  }

  backgroundImg=loadImage(bg);
} 