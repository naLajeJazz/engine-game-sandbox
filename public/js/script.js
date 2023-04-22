
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

let debug=new Obj(600,0),
    debugMode=false;


let mouse=new Obj(0,0,64,64),
    click=false,
    mouseMask=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
    

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



/////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);





////draw


  
 


if (debugMode){

debug.hudMsg(debug.x,debug.y+16,"green","19px DePixel",`
mouse.x: ${mouse.x}
mouse.y: ${mouse.y} 
click: ${click}


`)




}

txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Game Engine")


if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}


};
game();