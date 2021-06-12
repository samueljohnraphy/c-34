const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint
var ground,box1,ball,rope



function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,height,1600,50)
    box1 = new Box(780,560,70,70);
    box2 = new Box(780,510,70,70);
    box3 = new Box(780,460,70,70);
    box4 = new Box(780,410,70,70);
    box5 = new Box(780,360,70,70);
    box6 = new Box(780,310,70,70);
    box7 = new Box(780,260,70,70);
    box8 = new Box(780,210,70,70);


    box11 = new Box(900,560,70,70);
    box22 = new Box(900,510,70,70);
    box33 = new Box(900,460,70,70);
    box44 = new Box(900,410,70,70);
    box55 = new Box(900,360,70,70);
    box66 = new Box(900,310,70,70);
    box77 = new Box(900,260,70,70);
    box88 = new Box(900,210,70,70);
    ball  = new Ball(650,250,40)
    rope  = new Rope(ball.body,{
        x:650,y:0
    })
console.log(rope.lenght)
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
    box11.display();
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();
    box77.display();
    box88.display();
    ball.display();
    rope.display();
    ground.display();

}
function mouseDragged() {
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}

