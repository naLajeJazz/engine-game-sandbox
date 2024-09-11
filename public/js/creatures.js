import {canvas} from './obj.js'
import { butterflyImg, grass2Img, monitorImg,slimeImg } from "./Img.js";

import {xIndex,yIndex,xIndexSlime,yIndexSlime, xIndexButt, yIndexButt} from './anima.js'
import { slimeDir,loteOrcs, orcs,monitor,slime,
                  txt, creatureDir, butterfly, grass, player,
                   move, playerDir, moveL, moveR } from './globalVar.js';
import { debugMode } from './controller.js';


const Slime=()=>{
                  

 slime.hudMsg(slime.x+64,slime.y,"white","20px DePixel",slime.collideBolean)

                  if(slimeDir=="parado"){

slime.x=grass.x
slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+128,slime.w,slime.h)
                                    
}else
                  if(slimeDir=="d"){
if(moveL[0]){

                  slime.x+=slime.spd+grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h) 
}
if(moveR[0]){

                  slime.x+=slime.spd-grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h) 
}
 if (!move[0]){
                  slime.x+=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h)
}

}else if(slimeDir=="e"){
if(moveR[0]){

                  slime.x-=slime.spd+grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
}
if(moveL[0]){

                  slime.x-=slime.spd-grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h) 
}
if (!move[0]){
                  slime.x-=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
}


                  }

 
                                                                      
                                                                    
}

const FlyButterfly=()=>{

if(creatureDir==0){
                  butterfly.x+=butterfly.spd
}else
if(creatureDir==1){
                  butterfly.x-=butterfly.spd
}else
if(creatureDir==2){
                  butterfly.y+=butterfly.spd
}else
if(creatureDir==3){
                  butterfly.y-=butterfly.spd
}else
if(creatureDir==4){
                  butterfly.spd=0
}butterfly.spd=0.2
 
 //butterfly.Sprite(butterflyImg,butterfly.w,butterfly.h)
 butterfly.SpriteAnime(butterflyImg,xIndexButt,yIndexButt,butterfly.w,butterfly.h)
               //butterfly.Draw("red")
 
                                                                      
                                                                    
}


export default {Slime, FlyButterfly}

