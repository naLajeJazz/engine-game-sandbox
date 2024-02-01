
import {canvas} from './obj.js'
import {ctx} from './obj.js'
import{mouseImg} from './Img.js'
import {debugMode,mouse,room,dragable } from './controller.js'
import col from './CollitionsObj.js'
import{yIndex}from './anima.js'
import IntroScreen from './IntroScreen.js'
import Debugar from './debug.js'
import {mouseCollideBloco,bloco,monitor,slime,orcs,
loteOrcs,blocos,loteBlocos,text,txt,rand}from './globalVar.js'
import DragDrop from './DragDrop.js'
import OnOff from './OnOff.js'
import Novo from './nova.js'


//////GAME////
    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

                    /////GAME UPDATE//////
                   
col();

if(debugMode){
Debugar();
} 

if(room==0){
IntroScreen();
}else if(room==1){
  

DragDrop();

}else if(room==2){
  

OnOff();

}else if (room==3){
Novo();
}

if (dragable){mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)}else{mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}


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
  
  
}