
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg} from './Img.js'
import { debugMode,mouse,click } from './controller.js'
import col from './CollitionsObj.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Lembre-se de fazer modulos","Engine Game"];
let rand= Math.floor((Math.random() * text.length) )




let debug=new Obj(600,0,64,64);
let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
let bloco=new Obj(300,200,64,64),drag=false;


///anima Sprite
let xIndex=0;
let yIndex=0;
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira

  


//////GAME////
    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                    /////GAME UPDATE//////

col();



                            ////DRAW/////
                            
bloco.Draw("#0E7C7B")


//checa se click
if (mouseCollideBloco.collideBolean&&click){
  bloco.Draw("#17BEBB")
}
///checa se drag
if (mouseCollideBloco.collideBolean&&click){
  bloco.x=mouse.x
  bloco.y=mouse.y
 drag=true
}else{drag=false}

///


                            /////Debug

if (debugMode){

debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",`
debugmode  ${debugMode}   
click  ${click}   


`)

}



txt.hudMsg(txt.x,txt.y,"#17BEBB","100px DePixel ",text[rand] )



if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}


};
game();

export{
  mouseCollideBloco,mouse,bloco
}