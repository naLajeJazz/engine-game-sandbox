
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
import { blockImg, dirtImg, grassImg } from "./Img.js"
import playerMecanics from './playerMecanics.js'


//cria os boxes aleatoriamente pela screen
for(let i=0;i<loteBoxes;i++){                                               
  boxes[i].x=Math.floor(Math.random()*canvas.width);
  boxes[i].y=Math.floor(Math.random()*canvas.height);
  }; 


   

  const MovePlayer=()=>{
  
  
        AnimaSp();

      


  playerMecanics.moveBlock();
  playerMecanics.MovePlayer();


  }

  export default MovePlayer