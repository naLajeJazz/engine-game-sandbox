
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,slimeImg,monitorImg} from './Img.js'
import {debug, debugMode,mouse,click } from './controller.js'
import col from './CollitionsObj.js'
import{xIndex,yIndex,xIndexSlime,yIndexSlime}from './anima.js'



 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Lembre-se de fazer modulos","Engine Game"];
let rand= Math.floor((Math.random() * text.length) )



let animeTest=new Obj(100,400,300,300);
let slime=new Obj(Math.floor((Math.random() * canvas.width) ),Math.floor((Math.random() * canvas.height) ),64,64);


let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
let bloco=new Obj(300,200,64,64),drag=false;



//////GAME////
    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

                    /////GAME UPDATE//////
col();

                            ////DRAW/////
                           
animeTest.SpriteAnime(monitorImg,xIndex,yIndex,animeTest.w,animeTest.h)
slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+128,slime.w,slime.h)


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

debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",`
debugmode  ${debugMode}   
click  ${click}   
xIndex  ${xIndex}   
xIndexSlime  ${xIndexSlime}   


`)

}



txt.hudMsg(txt.x,txt.y,"#17BEBB","40px DePixel ",text[rand],0.5 )



if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)}else{mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}


};
game();


export{
  mouseCollideBloco,mouse,bloco,animeTest,slime
}