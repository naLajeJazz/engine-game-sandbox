import { player,moveR,moveL,moveU,moveD, move,
   ground, loteGrround, dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
   push,
   playerMaskPushR,
   boxesmask
   } from "./globalVar.js"


const MovePlayer=()=>{

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
      push[0]=false
    }
  
 
  }
const moveBlock=()=>{
                          
// empurrar boxes
if(moveR[0]
                  &&boxesMaskL[0].collideBolean
                  ||boxesMaskL[1].collideBolean
                  ||boxesMaskL[2].collideBolean){
                   push[0]=true
                  if(boxesMaskL[0].collideBolean){boxes[0].x+=player.spd/2  }
                  if(boxesMaskL[1].collideBolean){boxes[1].x+=player.spd/2}
                  if(boxesMaskL[2].collideBolean){boxes[2].x+=player.spd/2}

                }
                if(moveL[0]
                  &&boxesMaskR[0].collideBolean
                  ||boxesMaskR[1].collideBolean
                  ||boxesMaskR[2].collideBolean){
                    push[0]=true
                  if(boxesMaskR[0].collideBolean){boxes[0].x-=player.spd/2}
                  if(boxesMaskR[1].collideBolean){boxes[1].x-=player.spd/2} 
                  if(boxesMaskR[2].collideBolean){boxes[2].x-=player.spd/2} 
                  }
                if(moveD[0]
                  &&boxesMaskU[0].collideBolean
                  ||boxesMaskU[1].collideBolean
                  ||boxesMaskU[2].collideBolean){
                    push[0]=true
                  if(boxesMaskU[0].collideBolean){boxes[0].y+=player.spd/2}
                  if(boxesMaskU[1].collideBolean){boxes[1].y+=player.spd/2}
                  if(boxesMaskU[2].collideBolean){boxes[2].y+=player.spd/2}   
                  }  
                if(moveU[0]
                  &&boxesMaskD[0].collideBolean
                  ||boxesMaskD[1].collideBolean
                  ||boxesMaskD[2].collideBolean){
                    push[0]=true
                  if(boxesMaskD[0].collideBolean){boxes[0].y-=player.spd/2}
                  if(boxesMaskD[1].collideBolean){boxes[1].y-=player.spd/2}
                  if(boxesMaskD[2].collideBolean){boxes[2].y-=player.spd/2}   
                  } 
                
                
                
}
export default {MovePlayer, moveBlock}