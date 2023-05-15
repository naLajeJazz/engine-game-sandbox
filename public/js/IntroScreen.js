import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'
import { monitorImg,slimeImg } from "./Img.js";
import { loteOrcs, orcs,monitor,slime,txt,text,rand } from "./script.js";
import {xIndex,yIndex,xIndexSlime,yIndexSlime} from './anima.js'


const IntroScreen=()=>{
                  for(let i=0;i<loteOrcs;i++){
 
                                    let randi=[];
                                    randi[i]=Math.random()
                                    orcs[i].y+=randi[i]
                                                                       
                                    if(orcs[i].y>canvas.height){
                                    orcs[i].y=-32
                                    }
                                                                       
                                                                       
                                                                      
                                                                          
                                    if(orcs[i].collideBolean){
                                    orcs[i].hudMsg(orcs[i].x,orcs[i].y,"#FF99C8","14px DePixel ","♥");
                                    }else{orcs[i].Draw("#A9DEF9");}
                                                                         
                                                                       
                                                                         
                                    };  
                                                                      
                                                                                                 
                                    monitor.SpriteAnime(monitorImg,xIndex,yIndex,monitor.w,monitor.h)
                                    slime.SpriteAnime(slimeImg,xIndexSlime,yIndexSlime+128,slime.w,slime.h)
                                    txt.hudMsg(txt.x,txt.y,"#17BEBB","22px DePixel ","Game Engine sandbox" )
                                    txt.hudMsg(txt.x,txt.y+32,"#17BEBB","18px DePixel ","press '1' for drag and drop " )
                                    txt.hudMsg(txt.x,txt.y+64,"#17BEBB","18px DePixel ","press '2' for onOff " )
                                                                        
                                                                      
}
export default IntroScreen

