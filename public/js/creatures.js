import {canvas} from './obj.js'
import { monitorImg,slimeImg } from "./Img.js";

import {xIndex,yIndex,xIndexSlime,yIndexSlime} from './anima.js'
import { slimeDir,loteOrcs, orcs,monitor,slime,txt } from './globalVar.js';


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




                  for(let i=0;i<loteOrcs;i++){
 
                                    let randi=[];
                                    randi[i]=Math.random()
                                    orcs[i].y+=randi[i]
                                                                       
                                    if(orcs[i].y>canvas.height){
                                    orcs[i].y=-32
                                    }
                                                                       
                                                                       
                                                                      
                                                                          
                                   
                                    orcs[i].Draw("#A9DEF9")
                                                                         
                                                                       
                                                                         
                                    };  
                                                                      
                                                                                                 
                                   
                                 
                                                                      
}
export default Slime

