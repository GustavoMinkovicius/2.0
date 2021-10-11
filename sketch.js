var jogador
var imgsJogador = []
var inimigo
var imgsInimigo = []
var bg
var fase = 1
var grupoInimigos
var imgs = []
var grupoTiroJ,imgsTiroJ = []
var estadoJogo = 1
var vidas = 2
var imgsVida1,imgsVida2,imgsVida3;
var vidaI

function preload() {
  
  imgsJogador[0] = loadImage("image/jogador1.png"); 
  imgsJogador[1] = loadImage("image/jogador2.png");
  imgsJogador[2] = loadImage("image/jogador3.png");

  imgsTiroJ[0] = loadImage("image/tiroJ1.png");
  imgsTiroJ[1] = loadImage("image/tiroJ2.png");
  imgsTiroJ[2] = loadImage("image/tiroJ3.png");

  imgs[0] = loadImage("image/background1.jpg"); 
  imgs[1] = loadImage("image/background2.jpg");
  imgs[2] = loadImage("image/background3.jpg");

  imgsInimigo[0] = loadImage("image/inimigo1.png");
  imgsInimigo[1] = loadImage("image/inimigo2.png");
  imgsInimigo[2] = loadImage("image/inimigo3.png");

  imgsVida1 = loadImage("image/vida1.jpg");
  imgsVida2 = loadImage("image/vida2.jpg");
  imgsVida3 = loadImage("image/vida3.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(200,200,100,100);
  bg.velocityX = -4;
  mudarBg();

  jogador = createSprite(100,windowHeight/2,50,50);
  mudarNave();

  grupoTiroJ = new Group();
  grupoInimigos = new Group();
}

function draw() {
  background(0);
   
  if(estadoJogo == 1){
    if(keyDown("up") ){
      jogador.y = jogador.y  -4;
    }
  
    if(keyDown("down") ){
      jogador.y = jogador.y  +4;
    }

    if(bg.x < -60){
      bg.x = bg.width/8
    }
  
    if(keyDown("space")){
      gerarTirosJ();
    }

    var indexInimigo = Math.round(random(1,3)) 
    if(frameCount%200 === 0){
      gerarInimigo(indexInimigo);
    }

    if(grupoInimigos.isTouching(jogador)){
      grupoInimigos.destroyEach();
      vida--
    }
    gerarVidas()
    if(vida = 3){
      vidaI.addImage(imgsVida1);
    }
    if(vida = 2) {
      vidaI.addImage(imgsVida2);
    }
    if(vida = 1) {
      vidaI.addImage(imgsVida3);
    }
    if(vida == 0 ){
      estadoJogo = 0
    }
  
  }else if(estadoJogo == 0){

  }else if(estadoJogo == 2){

  }


  drawSprites();
}
function mudarBg(){
  bg.addImage(imgs[fase - 1]);
  
}
function mudarNave(){
  jogador.addImage(imgsJogador[fase-1]);  
}

function gerarInimigo(index){
  var inimigo = createSprite(windowWidth+10,Math.round(random(150,windowHeight-40)),50,50);
  inimigo.velocityX = -3
  inimigo.addImage(imgsInimigo[index-1]);
  inimigo.lifetime = 1000;
  grupoInimigos.add(inimigo);
}
function gerarTirosJ(){
  var tiro = createSprite(130,jogador.y,50,50);
  tiro.addImage(imgsTiroJ[fase-1]);
  tiro.velocityX = 4
  tiro.lifetime = 1000;
}
function gerarVidas(){
  vidaI = createSprite(130,50,50,50);
  vidaI.addImage(imgsVida1)
}