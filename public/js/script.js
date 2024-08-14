
import {canvas} from './obj.js'
import {ctx} from './obj.js'
import{mouseImg} from './Img.js'
import {debugMode,room,dragable } from './controller.js'
import col from './CollitionsObj.js'
import{yIndex}from './anima.js'
import IntroScreen from './IntroScreen.js'
import Debugar from './debug.js'
import {mouseCollideBloco,bloco,monitor,slime,orcs,
loteOrcs,blocos,loteBlocos,text,txt,rand,mouse}from './globalVar.js'
import DragDrop from './DragDrop.js'
import OnOff from './OnOff.js'
import MovePoint from './movePoint.js'
import rooms from './rooms.js'
import playerMecanics from './playerMecanics.js'
import animaSprite from './animaSprite.js'
import Slime from './creatures.js'


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

  canvas.style.backgroundColor="black";
  IntroScreen();

}else if(room==1){

  canvas.style.backgroundColor="black";
  DragDrop();

}else if(room==2){

  canvas.style.backgroundColor="black";
  OnOff();

}else if (room==3){

  
  rooms.solo();
  animaSprite.Animaboxes();
  animaSprite.AnimaSp();
  playerMecanics.moveBlock();
  playerMecanics.MovePlayer();
  Slime();
 

}
else if (room==4){

  rooms.soloB();
  MovePoint();
  
  }
  else if (room==5){
    canvas.style.backgroundColor="black";
    
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