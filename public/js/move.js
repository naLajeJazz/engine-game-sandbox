
import {canvas} from './obj.js'
import AnimaSp from "./animaSprite.js"
import { debugMode } from "./controller.js"
import { player,moveR,moveL,moveU,moveD, move,
   ground, loteGrround, dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
  
} from "./globalVar.js"
import { blockImg, dirtImg, grassImg } from "./Img.js"
import playerMecanics from './playerMecanics.js'


//cria os boxes aleatoriamente pela screen
for(let i=0;i<loteBoxes;i++){                                               
  boxes[i].x=Math.floor(Math.random()*canvas.width);
  boxes[i].y=Math.floor(Math.random()*canvas.height);
  }; 


   

  const MovePlayer=()=>{
  
    for(let i=0;i<loteGrround;i++){                                               
      ground[i].Sprite(grassImg,64,64)
      };  

      for(let i=0;i<lotedirt;i++){                                               
        dirT[i].Sprite(dirtImg,64,64)
        };  

        AnimaSp();

        if (debugMode){
          playerMask.DrawRect("orange",1)
          
         
          for(let i=0;i<loteBoxes;i++){
            boxes[i].Draw("red",0.2)
            boxesMaskL[i].DrawRect("blue")
            boxesMaskR[i].DrawRect("green")
            boxesMaskD[i].DrawRect("yellow")
            boxesMaskU[i].DrawRect("white")
            
          };}


  playerMecanics.moveBlock();
  playerMecanics.MovePlayer();


  }

  export default MovePlayer