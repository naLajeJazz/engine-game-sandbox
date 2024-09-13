import {canvas} from './obj.js'
import { butterflyImg, grass2Img, monitorImg,slimeImg } from "./Img.js";

import {xIndex,yIndex,xIndexSlime,yIndexSlime, xIndexButt, yIndexButt} from './anima.js'
import { slimeDir,loteOrcs, orcs,monitor,slime,
txt, creatureDir, butterfly, grass, player,
move, playerDir, moveL, moveR, moveU, moveD,
 moveLd, moveRu, moveRd, moveLu, cameraMove } from './globalVar.js';
import { debugMode } from './controller.js';


const Slime=()=>{
                

 slime.hudMsg(slime.x+64,slime.y,"white","20px DePixel",`${slime.x }  ${slime.y}  ${creatureDir[0]}`)



 if(creatureDir[0]==0){
                  slime.x+=slime.spd
                
                 
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h);
}else
if(creatureDir[0]==1){
                 slime.x-=slime.spd
                 slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
}else
if(creatureDir[0]==2){
                  slime.y+=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h);
}else
if(creatureDir[0]==3){
                 slime.y-=slime.spd
                 slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h);
}else
if(creatureDir[0]==4){
                  slime.spd=0
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h);
}slime.spd=1







   /*       
 //se a direção da creature for 4(nao mova)

 if(creatureDir[0]==4){

                  //fixe a posição da creatura na posição do tile
                  
                  slime.x=grass.x
                  slime.y=grass.y
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+128,slime.w,slime.h)
                                                      
                  } 
 
 
 
                  //se a direção da creature for R
                  if(creatureDir[0]==0){

                  slime.x+=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h);

if(moveL[0]&&cameraMove[0]){

                  slime.x+=slime.spd+grass.spd;
                 
}


if(moveR[0]&&cameraMove[0]){

                  slime.x+=slime.spd-grass.spd
                 
}


if(moveU[0]&&cameraMove[0]){
                  
                  slime.y-=-grass.spd
                  slime.x-=slime.spd
                 
                  
}
if(moveD[0]&&cameraMove[0]){
                  slime.y+=slime.spd-grass.spd
                  
                  
 }

if(moveR[0]&&moveU[0]){
                  
                 
}



 if (!move[0]&&cameraMove[0]){
                  slime.x+=slime.spd
                  
}
                  
}
else
                 //se a direção da creature for L
                  if(creatureDir[0]==1){

if(moveR[0]){

                  slime.x-=slime.spd+grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
}else
if(moveL[0]){

                  slime.x-=slime.spd-grass.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h) 
}else
if(moveU[0]){
                  
                  slime.y-=-grass.spd
                  slime.x-=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
                  }else
if(moveD[0]){
                  slime.y+=-grass.spd
                  slime.x-=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
                                    }else
if (!move[0]){
                  slime.x-=slime.spd
                  slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h)
}


}


 
                                                                      
  */                                                                  
}

/////////



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

