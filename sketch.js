var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47;
var jerry,jerryImg;
var cheese1,cheese2,cheese3,cheese4,cheese5,cheese6,cheese7,cheese8,cheese9,cheese10,cheeseImage;

function preload(){
jerryImg = loadImage("Jerry.png");
cheeseImg = loadImage("Cheese.png");
}

function setup(){
    createCanvas(600,600);

    jerry = createSprite(490,25,10,10);
    jerry.addImage(jerryImg);
    jerry.scale = 0.15;

    cheese1 = createSprite(318,116);
    cheese1.addImage(cheeseImg);
    cheese1.scale = 0.03;
    cheese2 = createSprite(410,325);
    cheese2.addImage(cheeseImg);
    cheese2.scale = 0.03;
    cheese3 = createSprite(290,295);
    cheese3.addImage(cheeseImg);
    cheese3.scale = 0.03;
    cheese4 = createSprite(265,391);
    cheese4.addImage(cheeseImg);
    cheese4.scale = 0.03;
    cheese5 = createSprite(95,70);
    cheese5.addImage(cheeseImg);
    cheese5.scale = 0.03;
    cheese6 = createSprite(496,518);
    cheese6.addImage(cheeseImg);
    cheese6.scale = 0.03;
    cheese7 = createSprite(45,226);
    cheese7.addImage(cheeseImg);
    cheese7.scale = 0.03;
    cheese8 = createSprite(100,464);
    cheese8.addImage(cheeseImg);
    cheese8.scale = 0.03;
    cheese9 = createSprite(170,538);
    cheese9.addImage(cheeseImg);
    cheese9.scale = 0.03;
    cheese10 = createSprite(550,222);
    cheese10.addImage(cheeseImg);
    cheese10.scale = 0.03;
   
   




    w1 = createSprite(240,25,430,10);
    w1.shapeColor = "red";
    w2 = createSprite(20,295,10,550);
    w2.shapeColor = "red";
    w3 = createSprite(40,570,50,10);
    w3.shapeColor = "red";
    w4 = createSprite(355,570,450,10);
    w4.shapeColor = "red";
    w5 = createSprite(580,300,10,550);
    w5.shapeColor = "red";
    w6 = createSprite(552,25,65,10);
    w6.shapeColor = "red";
    w7 = createSprite(65,80,10,100);
    w7.shapeColor = "red";
    w8 = createSprite(92.5,135,65,10);
    w8.shapeColor = "red";
    w9 = createSprite(125,60,10,65);
    w9.shapeColor = "red";
    w10 = createSprite(50,175,55,10);
    w10.shapeColor = "red";
    w11 = createSprite(50,175,55,10);
    w11.shapeColor = "red";
    w12 = createSprite(75,215,10,90);
    w12.shapeColor = "red";
    w13 = createSprite(97.5,265,55,10);
    w13.shapeColor = "red";
    w14 = createSprite(130,295,10,70);
    w14.shapeColor = "red";
    w15 = createSprite(50,175,55,10);
    w15.shapeColor = "red";
    w16 = createSprite(75,420,10,180);
    w16.shapeColor = "red";
    w17 = createSprite(170,420,190,10);
    w17.shapeColor = "red";
    w18 = createSprite(135,535,10,60);
    w18.shapeColor = "red";
    w19 = createSprite(197,505,135,10);
    w19.shapeColor = "red";
    w20 = createSprite(305,60,10,60);
    w20.shapeColor = "red";
    w21 = createSprite(250,95,120,10);
    w21.shapeColor = "red";
    w22 = createSprite(185,130,10,80);
    w22.shapeColor = "red";
    w23 = createSprite(210,175,60,10);
    w23.shapeColor = "red";
    w24 = createSprite(270,135,170,10);
    w24.shapeColor = "red";
    w25 = createSprite(180,215,120,10);
    w25.shapeColor = "red";
    w26 = createSprite(240,270,10,120);
    w26.shapeColor = "red";
    w27 = createSprite(275,330,80,10);
    w27.shapeColor = "red";
    w28 = createSprite(310,420,10,180);
    w28.shapeColor = "red";
    w29 = createSprite(300,210,10,80);
    w29.shapeColor = "red";
    w30 = createSprite(335,505,60,10);
    w30.shapeColor = "red";
    w31 = createSprite(355,155,10,110);
    w31.shapeColor = "red";
    w32 = createSprite(402,100,105,10);
    w32.shapeColor = "red";
    w33 = createSprite(450,118,10,45);
    w33.shapeColor = "red";
    w35 = createSprite(330,330,60,10);
    w35.shapeColor = "red";
    w36 = createSprite(355,290,10,80);
    w36.shapeColor = "red";
    w37 = createSprite(402.5,250,105,10);
    w37.shapeColor = "red";
    w38 = createSprite(450,210,10,80);
    w38.shapeColor = "red";
    w39 = createSprite(450,320,10,150);
    w39.shapeColor = "red";
    w40 = createSprite(415,400,80,10);
    w40.shapeColor = "red";
    w41 = createSprite(450,460,150,10);
    w41.shapeColor = "red";
    w42 = createSprite(455,515,10,100);
    w42.shapeColor = "red";
    w43 = createSprite(555,400,60,10);
    w43.shapeColor = "red";
    w44 = createSprite(480,290,65,10);
    w44.shapeColor = "red";
    w45 = createSprite(507.5,315,10,40);
    w45.shapeColor = "red";
    w46 = createSprite(520,170,10,150);
    w46.shapeColor = "red";
    w47 = createSprite(545,250,60,10);
    w47.shapeColor = "red";

   
}



function draw(){
    background("black");
    textSize(20)
    fill("yellow");
    stroke(50)
    text(mouseX+","+mouseY,mouseX,mouseY);

    if(keyDown("down"))
  {
  jerry.y = jerry.y + 5;  
  }

  if(keyDown("up"))
  {
    jerry.y = jerry.y - 5;  
  }

  if(keyDown("left"))
  {
    jerry.x = jerry.x - 5;  
  }

  if(keyDown("right"))
  {
    jerry.x = jerry.x + 5;  
  }

  
    drawSprites();
}