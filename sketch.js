let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBola = 6;
let velocidadeYBola = 6;

let larguraRaquete = 10;
let alturaRaquete = 90;

//raquete jogador
let xRaqueteJogador = 5;
let yRaqueteJogador = 150;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 155;
let velocidadeYOponente;

//placar
let pontosJogador = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  exibeBola();
  movimentaBola();
  verificaColisaoBolaBorda();
  exibeRaquete(xRaqueteJogador,yRaqueteJogador);
  movimentaRaqueteJogador();
  verificaColisaoRaqueteJogadorBola();
  exibeRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponenteBola();
  exibePlacar();
  marcaPonto();
  
}    
 
function exibeRaquete(x,y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaqueteJogador(){
  if(keyIsDown(UP_ARROW)){
    if(yRaqueteJogador >= 0){
        yRaqueteJogador -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yRaqueteJogador <= height - alturaRaquete){
       yRaqueteJogador += 10;
    }
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBola - yRaqueteOponente - (alturaRaquete / 2 - 30);
  yRaqueteOponente += velocidadeYOponente;
}


function verificaColisaoRaqueteJogadorBola(){
  if(xBola - raio + 3 < xRaqueteJogador + larguraRaquete && yBola - raio < yRaqueteJogador + alturaRaquete && yBola + raio > yRaqueteJogador){
     velocidadeXBola  *= -1;
      raquetada.play();
  }
  
}

function verificaColisaoRaqueteOponenteBola(){
  if(xBola + raio > xRaqueteOponente + 2 && yBola - raio < yRaqueteOponente + alturaRaquete && yBola + raio > yRaqueteOponente){
     velocidadeXBola  *= -1;
      raquetada.play();
  }
  
}

function exibeBola(){
  circle(xBola, yBola, diametro);
}
  
function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBolaBorda(){
  if(xBola >= width - raio + 5 || xBola <= 0 + raio - 5){
     velocidadeXBola  *= -1;
  }
  
  if(yBola >= height - raio + 5 || yBola <= 0 + raio - 5){
    velocidadeYBola  *= -1;
  }
}

function marcaPonto(){
  if(xBola >= width - raio + 5){
    pontosJogador += 1;
    ponto.play();
  }
  if(xBola <= 0 + raio - 5){
     pontosOponente += 1;
     ponto.play();
  }
}


function exibePlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130,10,40,20);
  fill(255);
  text(pontosJogador, 150, 26);
  fill(color(255,140,0));
  rect(430,10,40,20);
  fill(255);
  text(pontosOponente, 450, 26);
}
  
  


