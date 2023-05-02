const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fundo;
var torre;
var canhao;
var angle;
function preload() {
  fundo = loadImage("assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = new Torre(150, 350, 160, 310);
  canhao = new Canhao(180, 120, 130, 100, angle);
}

function draw() {
  background(fundo);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  torre.show();
  canhao.show();

  Engine.update(engine);
}
