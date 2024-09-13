
import {canvas} from './obj.js'
import {ctx} from './obj.js'
import{mouseImg} from './Img.js'
import updateGamepadstatus, {debugMode,dragable } from './controller.js'
import Collitions from './CollitionsObj.js'
import{yIndex}from './anima.js'
import IntroScreen from './IntroScreen.js'
import Debugar from './debug.js'
import {mouseCollideBloco,bloco,monitor,slime,orcs,
loteOrcs,blocos,loteBlocos,text,txt,rand,mouse, room}from './globalVar.js'
import DragDrop from './DragDrop.js'
import OnOff from './OnOff.js'
import MovePoint from './movePoint.js'
import rooms from './rooms.js'
import playerMecanics from './playerMecanics.js'
import animaSprite from './animaSprite.js'
import particles from './particles.js'
import creatures from './creatures.js'
import boxesInteracts from './worldInteract.js'

//////GAME////


function Game (){
requestAnimationFrame(Game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

                    /////GAME UPDATE//////
                            
                   updateGamepadstatus()         

if(debugMode){
Debugar();
} 

if(room[0]==0){

  canvas.style.backgroundColor="black";
  IntroScreen();

}else if(room[0]==1){

  canvas.style.backgroundColor="black";
  DragDrop();
  
}else if(room[0]==2){

  canvas.style.backgroundColor="black";
  OnOff();

}else if (room[0]==3){
 
  Collitions();
  rooms.Tiles();
  rooms.RoomObjects();
  animaSprite.AnimaElements();

  animaSprite.AnimaPlayer();
  //playerMecanics.MoveBlock();
  playerMecanics.MovePlayer();
  //MovePoint();
  //creatures.Slime();
  //particles.Rain();
  //creatures.FlyButterfly()
  boxesInteracts();
}
else if (room[0]==4){
  
  MovePoint();
  
  }
  else if (room[0]==5){
    canvas.style.backgroundColor="black";
   
    }

//if (dragable){mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)}else{mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}


};
Game();


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