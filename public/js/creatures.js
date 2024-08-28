import {canvas} from './obj.js'
import { butterflyImg, grass2Img, monitorImg,slimeImg } from "./Img.js";

import {xIndex,yIndex,xIndexSlime,yIndexSlime, xIndexButt, yIndexButt} from './anima.js'
import { slimeDir,loteOrcs, orcs,monitor,slime,
                  txt, creatureDir, butterfly, grass } from './globalVar.js';
import { debugMode } from './controller.js';


const Slime=()=>{


 
                  if(slimeDir==""){
                                    slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+128,slime.w,slime.h) 
                  }else
                  if(slimeDir=="d"){
                                    slime.x-=slime.spd
                                    slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime,slime.w,slime.h) 
                  }else if(slimeDir=="e"){
                                     slime.x+=slime.spd;
                                     slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+64,slime.w,slime.h) 
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

