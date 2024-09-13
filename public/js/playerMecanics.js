import { player,moveR,moveL,moveU,moveD, move,
   dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
   push,
   playerMaskPushR,
   boxesmask,
   grass,
   playerDir,
   moveRu,
   moveRd,
   moveLu,
   moveLd,
   camera
   } from "./globalVar.js"
import { canvas } from "./obj.js"


const MovePlayer=()=>{

  camera.x=player.x-320
  camera.y=player.y-192
  
 

if (moveR[0]&&moveU[0]){moveRu[0]=true}else{moveRu[0]=false}
if (moveR[0]&&moveD[0]){moveRd[0]=true}else{moveRd[0]=false}
if (moveL[0]&&moveU[0]){moveLu[0]=true}else{moveLu[0]=false}
if (moveL[0]&&moveD[0]){moveLd[0]=true}else{moveLd[0]=false}


//corrigindo a velocidade nos movimentos diagonais
if(moveU[0]||moveD[0]){player.spd=2}
if(moveU[0]||moveD[0]){player.spd=2}

//Move player

  if(moveR[0]
  &&!boxesMaskL[0].collideBolean
  &&!boxesMaskL[1].collideBolean
  &&!boxesMaskL[2].collideBolean
  &&!boxesMaskL[3].collideBolean){

    playerDir[0]=0

if(camera.x+camera.w>=canvas.width
   &&grass.x+grass.w>=canvas.width){

      grass.x-=player.spd

}else
{
   player.x+=player.spd
   

}
}


if(moveL[0]
  &&!boxesMaskR[0].collideBolean
  &&!boxesMaskR[1].collideBolean
  &&!boxesMaskR[2].collideBolean
  &&!boxesMaskR[3].collideBolean){
    
    playerDir[0]=1

    if(camera.x<=0
      &&grass.x<=0){
    
      grass.x+=player.spd
      

    }else{
      player.x-=player.spd
    }
    
    }
    

if(moveD[0]
  &&!boxesMaskU[0].collideBolean
  &&!boxesMaskU[1].collideBolean
  &&!boxesMaskU[2].collideBolean
  &&!boxesMaskU[3].collideBolean){

    playerDir[0]=2

    if(camera.y+camera.h>=canvas.height
      &&grass.y+grass.h>canvas.height){

      grass.y-=player.spd
      

    }else{
      player.y+=player.spd
    }
    }

if(moveU[0]
  &&!boxesMaskD[0].collideBolean
  &&!boxesMaskD[1].collideBolean
  &&!boxesMaskD[2].collideBolean
  &&!boxesMaskD[3].collideBolean){

    playerDir[0]=3;

    if(camera.y<=0&&grass.y<0){

      
      grass.y+=player.spd;
     
    }else{
      player.y-=player.spd
    }
    }

  
if(!move[0]){
      player.spd=3;  
      push[0]=false;
      
    }
  
 
  }
const MoveBlock=()=>{
                          
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
export default {MovePlayer, MoveBlock}