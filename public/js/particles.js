import {canvas} from './obj.js'
import { player,moveR,moveL,moveU,moveD, move,
   ground, loteGrround, dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
   playerMaskPushR,
   loteOrcs,
   orcs,
  
} from "./globalVar.js"
import { blockImg, dirt2Img, dirtImg, grass2Img, grassImg } from "./Img.js"
import { debugMode } from './controller.js';

const Rain=()=>{

if (!debugMode){


for(let i=0;i<loteOrcs;i++){
let randi=[];
randi[i]=Math.random()
orcs[i].y+=randi[i]
orcs[i].x+=0.3
                                                                       
if(orcs[i].y>canvas.height){
orcs[i].y=-32
}else if (orcs[i].x>canvas.width){
orcs[i].x=-32
}
orcs[i].Draw("#A9DEF9",0.5)
}                                                                                    
}; 
                               
}

 

  export default{Rain} 