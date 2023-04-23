
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg} from './Img.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5);
setInterval(()=>txt.spd=-0.5 ,4000);
setInterval(()=>txt.spd=0.5 ,8000);

let logo=new Obj(canvas.width/2,canvas.height/2,800,800)

let debug=new Obj(600,0),
    debugMode=true;


let mouse=new Obj(0,0,64,64),
mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
mouseCollideBloco2=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
drag=false,
    click=false;

let bloco=new Obj(300,300,64,64),drag1=false;
let bloco2=new Obj(600,300,64,64),drag2=false;
    

/////////


////controles////

////teclado

window.addEventListener("keyup",()=>{
               
                 
                  
                },false);

window.addEventListener("keydown",function(event){

                  let k= event.key;
                             
                  if (k == "d" ){
                                         
                  

                  }else if(k =="a" ){

                 
                                        
                  }else if (k=="w"){

               

                  }else if (k=="t"){
                  debugMode=true           
                  }else if (k=="y"){
                  debugMode=false           
                  }
                  else if (k=="f"){
                                
                  }
                  else if (k=="g"){
                                
                  }
                  else if (k=="e"){
                                  
                  }
                  else if (k=="q"){
                               
                  }
                  else if (k=="p"){
                                 
                  }
                  else if (k=="o"){
                      
                  }
                  else if (k=="x"){
                       
                  }
                  else if (k=="z"){
                       
                  }
                  },false);


///mouse
                  
canvas.addEventListener('mousemove',function(e){
                  mouse.x=e.offsetX;
                  mouse.y=e.offsetY;

                  
              },false);
canvas.addEventListener('mousedown',function(){
                  click=true
                  
                 
                 
              },false);
canvas.addEventListener('mouseup',function(){
                  click=false
                 
                  
              },false);
canvas.addEventListener('mouseover',function(){
                  ////
                  
              },false);
               
/////////

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira

//////GAME////
    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                    /////GAME UPDATE//////

///fixa mascara de colisão
mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;

mouseCollideBloco2.x=mouse.x;
mouseCollideBloco2.y=mouse.y;
//

///checa as colisoes das masks
mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h)
mouseCollideBloco2.collide(bloco2.x,bloco2.y,bloco2.w,bloco2.h)
///


                            ////DRAW/////

bloco.Draw("green")
bloco2.Draw("red")


///executa interaçao se houver colisão
//com bloco
//checa se over
if(mouseCollideBloco.collideBolean){
  bloco.hudMsg(bloco.x+32,bloco.y-32,"red","19px DePixel","estaçao bloco")
}
//checa se click
if (mouseCollideBloco.collideBolean&&click){
  bloco.Draw("blue")
}
///checa se drag
if (mouseCollideBloco.collideBolean&&click&&!drag2){
  bloco.x=mouse.x
  bloco.y=mouse.y
 drag1=true
}else{drag1=false}

//com bloco2
if(mouseCollideBloco2.collideBolean){
  bloco2.hudMsg(bloco2.x+32,bloco2.y-32,"red","19px DePixel","estaçao bloco 2")
}
if (mouseCollideBloco2.collideBolean&&click){
  bloco2.Draw("blue")
}
if (mouseCollideBloco2.collideBolean&&click&&!drag1){
  bloco2.x=mouse.x
  bloco2.y=mouse.y
 drag2=true
}else{drag2=false}

///




if (debugMode){

debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",`
mouse.x: ${mouse.x}
mouse.y: ${mouse.y} 
click: ${click}
colide bloco: ${ mouseCollideBloco.collideBolean }
colide: ${ mouseCollideBloco2.collideBolean }
d: ${ drag }


`)

}
/*
txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Game Engine")
*/

if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}


};
game();