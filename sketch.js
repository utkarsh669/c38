const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint



function preload() {
  

}

function setup() {
  createCanvas(1200, 600);
  engine= Engine.create();
  
  world= engine.world

  
  

  ground1 = new Ground(width/2-100, height/2+152, 1200, 20);

  

 ball = new Ball(325,225,35);

  box=new Box (520,200,30,30)
  box2=new Box (520,210,30,30)
  box3=new Box (520,220,30,30)
  box4=new Box (520,230,30,30)
  box5=new Box (520,240,30,30)
  box6=new Box (520,250,30,30)
  box7=new Box (520,260,30,30)
  box8=new Box (520,270,30,30)
  box9=new Box (520,280,30,30)
  box10=new Box (520,290,30,30)
  box11=new Box (520,300,30,30)
  box12=new Box (520,310,30,30)
  box13=new Box (520,320,30,30)
   box14=new Box (520,330,30,30)
   box15=new Box (520,340,30,30)

   box16=new Box (690,210,30,30)
   box17=new Box (690,220,30,30)
   box18=new Box (690,230,30,30)
   box19=new Box (690,240,30,30)
   box20=new Box (690,250,30,30)
   box21=new Box (690,260,30,30)
   box22=new Box (690,270,30,30)
   box23=new Box (690,280,30,30)
   box24=new Box (690,290,30,30)
   box25=new Box (690,300,30,30)
   box26=new Box (690,310,30,30)
   box27=new Box (690,320,30,30)
   box28=new Box (690,330,30,30)
   box29=new Box (690,340,30,30)
   box30=new Box (690,350,30,30)


   box31=new Box (600,210,30,30)
   box32=new Box (600,220,30,30)
   box33=new Box (600,230,30,30)
   box34=new Box (600,240,30,30)
   box35=new Box (600,250,30,30)
   box36=new Box (600,260,30,30)
   box37=new Box (600,270,30,30) 
   box38=new Box (600,280,30,30) 
   box39=new Box (600,290,30,30)
   box40=new Box (600,300,30,30)
   box41=new Box (600,310,30,30)
   box42=new Box (600,320,30,30)
  
   chain = new Chain(ball.body,{x:325,y:225}); 
   
   
	Engine.run(engine);



}

function draw() {
  background("white");
Engine.update(engine)
ground1.display();



chain.display();


ball.display();

box.display();
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
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();


box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();

Engine.update(engine)



}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
ball.fly();
}


