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

          

// empurrar boxes
if(moveR[0]
  &&boxesMaskL[0].collideBolean
  ||boxesMaskL[1].collideBolean
  ||boxesMaskL[2].collideBolean){
  if(boxesMaskL[0].collideBolean){boxes[0].x+=player.spd-2}
  if(boxesMaskL[1].collideBolean){boxes[1].x+=player.spd-2}
  if(boxesMaskL[2].collideBolean){boxes[2].x+=player.spd-2}
}
if(moveL[0]
  &&boxesMaskR[0].collideBolean
  ||boxesMaskR[1].collideBolean
  ||boxesMaskR[2].collideBolean){
  if(boxesMaskR[0].collideBolean){boxes[0].x-=player.spd-2}
  if(boxesMaskR[1].collideBolean){boxes[1].x-=player.spd-2} 
  if(boxesMaskR[2].collideBolean){boxes[2].x-=player.spd-2} 
  }
if(moveD[0]
  &&boxesMaskU[0].collideBolean
  ||boxesMaskU[1].collideBolean
  ||boxesMaskU[2].collideBolean){
  if(boxesMaskU[0].collideBolean){boxes[0].y+=player.spd-2}
  if(boxesMaskU[1].collideBolean){boxes[1].y+=player.spd-2}
  if(boxesMaskU[2].collideBolean){boxes[2].y+=player.spd-2}   
  }  
if(moveU[0]
  &&boxesMaskD[0].collideBolean
  ||boxesMaskD[1].collideBolean
  ||boxesMaskD[2].collideBolean){
  if(boxesMaskD[0].collideBolean){boxes[0].y-=player.spd-2}
  if(boxesMaskD[1].collideBolean){boxes[1].y-=player.spd-2}
  if(boxesMaskD[2].collideBolean){boxes[2].y-=player.spd-2}   
  } 


//player move
if(moveR[0]
  &&!boxesMaskL[0].collideBolean
  &&!boxesMaskL[1].collideBolean
  &&!boxesMaskL[2].collideBolean){
    if(moveU[0]||moveD[0]){player.spd=2}
     player.x+=player.spd
    }

if(moveL[0]
  &&!boxesMaskR[0].collideBolean
  &&!boxesMaskR[1].collideBolean
  &&!boxesMaskR[2].collideBolean){
    if(moveU[0]||moveD[0]){player.spd=2}
     player.x-=player.spd
    }

if(moveD[0]
  &&!boxesMaskU[0].collideBolean
  &&!boxesMaskU[1].collideBolean
  &&!boxesMaskU[2].collideBolean){
     player.y+=player.spd
    }

if(moveU[0]
  &&!boxesMaskD[0].collideBolean
  &&!boxesMaskD[1].collideBolean
  &&!boxesMaskD[2].collideBolean){
     player.y-=player.spd
    }


if(!move[0]){
      player.spd=3
    }
  
 
  }

  export default MovePlayer