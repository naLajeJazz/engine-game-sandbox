import {canvas} from './obj.js'
import { monitorImg,slimeImg } from "./Img.js";

import {xIndex,yIndex,xIndexSlime,yIndexSlime} from './anima.js'
import { slimeDir,loteOrcs, orcs,monitor,slime,txt } from './globalVar.js';


const IntroScreen=()=>{
                  for(let i=0;i<loteOrcs;i++){
 
                                    let randi=[];
                                    randi[i]=Math.random()
                                    orcs[i].y+=randi[i]
                                                                       
                                    if(orcs[i].y>canvas.height){
                                    orcs[i].y=-32
                                    }
                                                                       
                                                                       
                                                                      
                                                                          
                                    if(orcs[i].collideBolean){
                                    orcs[i].hudMsg(orcs[i].x,orcs[i].y,"#FF99C8","14px DePixel ","X");
                                    }else{orcs[i].Draw("#A9DEF9");}
                                                                         
                                                                       
                                                                         
                                    };  
                                                                      
                                                                                                 
                                    monitor.SpriteAnime(monitorImg,xIndex,yIndex,monitor.w,monitor.h)
                                    
                                    txt.hudMsg(txt.x,txt.y,"#A1A61B","28px DePixel ","Game Engine sandbox" )
                                    txt.hudMsg(txt.x,txt.y+32,"#A1A61B","20px DePixel ","press '1' for drag and drop " )
                                    txt.hudMsg(txt.x,txt.y+64,"#A1A61B","20px DePixel ","press '2' for onOff " )
                                    txt.hudMsg(txt.x,txt.y+96,"#A1A61B","20px DePixel ","press '3' move player" )
                                    txt.hudMsg(txt.x,txt.y+128,"#A1A61B","20px DePixel ","press '4' move to point" )
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
export default IntroScreen

