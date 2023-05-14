
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,slimeImg,monitorImg} from './Img.js'
import {debug, debugMode,mouse,click } from './controller.js'
import col from './CollitionsObj.js'
import{xIndex,yIndex,xIndexSlime,yIndexSlime}from './anima.js'
import IntroScreen from './IntroScreen.js'
import Debugar from './debug.js'



 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Engine Game"];
let rand= 0;
setInterval(() => {rand=Math.floor((Math.random() * text.length) ) }, 5000);

let monitor=new Obj(canvas.width/2-150,canvas.height/2-150,300,300);

let slime=new Obj(monitor.x,monitor.y-64,64,64);


let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);

let blocos=[]
let loteBlocos=3
for(let i=0;i<loteBlocos;i++){
 blocos[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),64,64)
};

let bloco=new Obj(300,200,64,64);
let drag=false;
let orcs=[];
let loteOrcs=800;
for(let i=0;i<loteOrcs;i++){
  orcs[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),1,Math.floor(Math.random()*8),Math.floor(Math.random()*8));
  
};
let onOff=[false]

//////GAME////
    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

                    /////GAME UPDATE//////
col();


                       
/*
for(let i=0;i<loteBlocos;i++){
 


if(blocos[i].collideBolean&&click&&!onOff){
  onOff=true
 
}else if(blocos[i].collideBolean&&click&&onOff){
  onOff=false
}
 if(onOff){
  blocos[i].Draw("red")
 }else{
  blocos[i].Draw("green")
 }
   
};                         
*/
/*
bloco.Draw("#0E7C7B");



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
*/

                            /////Debug

if (debugMode){



IntroScreen();
Debugar()

}







if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)}else{mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}


};
game();


export{
  mouseCollideBloco,
  mouse,
  bloco,
  monitor,
  slime,
  orcs,
  loteOrcs,
  blocos,
  loteBlocos,
  text,
  txt,
  rand,
  onOff
  
}