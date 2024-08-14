
import {canvas} from './obj.js'
import AnimaSp from "./animaSprite.js"
import { debugMode } from "./controller.js"
import { player,moveR,moveL,moveU,moveD, move,
   ground, loteGrround, dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
   playerMaskPushR,
  
} from "./globalVar.js"
import { blockImg, dirt2Img, dirtImg, grass2Img, grassImg } from "./Img.js"
import playerMecanics from './playerMecanics.js'


//cria os boxes aleatoriamente pela screen
for(let i=0;i<loteBoxes;i++){                                               
  boxes[i].x=Math.floor(Math.random()*canvas.width);
  boxes[i].y=Math.floor(Math.random()*canvas.height);
  }; 


   

  const solo=()=>{
                  canvas.style.backgroundColor="#313702";
    for(let i=0;i<loteGrround;i++){                                               
      ground[i].Sprite(grassImg,64,64)
      };  

      for(let i=0;i<lotedirt;i++){                                               
        dirT[i].Sprite(dirtImg,64,64)
        };  

 
  }
  const soloB=()=>{
                  canvas.style.backgroundColor="#23142d";        
                  for(let i=0;i<loteGrround;i++){                                               
                    ground[i].Sprite(grass2Img,64,64)
                    };  
              
                    for(let i=0;i<lotedirt;i++){                                               
                      dirT[i].Sprite(dirt2Img,64,64)
                      };  
              
               
                }

  export default{solo,soloB} 