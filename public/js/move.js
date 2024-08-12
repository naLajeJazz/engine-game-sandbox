import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import AnimaSp from "./animaSprite.js"
import { debugMode } from "./controller.js"
import { player,moveR,moveL,moveU,moveD, move,box, boxMask, playerMask, boxMaskL, boxMaskR, boxMaskD, boxMaskU, grass, ground, loteGrround, dirT, lotedirt } from "./globalVar.js"
import { dirtImg, grassImg, hairImg, pantsImg, playerImg, roupaImg } from "./Img.js"
import Obj from "./obj.js"






  const MovePlayer=()=>{

/*
    for(let i=0;i<loteGrround;i++){                                               
      ground[i].Sprite(grassImg,64,64)
      };  

      for(let i=0;i<lotedirt;i++){                                               
        dirT[i].Sprite(dirtImg,64,64)
        };  
*/

        AnimaSp()
   
     // boxMask.DrawRect("blue",1)
      boxMaskR.DrawRect("green",1)
      boxMaskL.DrawRect("blue",1)
      boxMaskD.DrawRect("purple",1)
      boxMaskU.DrawRect("yellow",1)

        playerMask.DrawRect("orange",1)
        box.DrawRect("red",1)
    
        if(moveR[0]&&!boxMaskL.collideBolean){ player.x+=player.spd}
        if(moveL[0]&&!boxMaskR.collideBolean){ player.x-=player.spd}
        if(moveD[0]&&!boxMaskU.collideBolean){ player.y+=player.spd}
        if(moveU[0]&&!boxMaskD.collideBolean){ player.y-=player.spd}
      
      
      
      



   
    /*


    if (moveR[0]&&moveU[0]){
      player.spd=2
      player.x+=player.spd
      player.y-=player.spd
   
      
    }
 else

 if (moveR[0]&&moveD[0]){
  player.spd=2
  player.x+=player.spd
  player.y+=player.spd
  
}else
if (moveL[0]&&moveU[0]){
  player.spd=2
  player.x-=player.spd
  player.y-=player.spd
  
}else
if (moveL[0]&&moveD[0]){
  player.spd=2
  player.x-=player.spd
  player.y+=player.spd

}else

    if (moveR[0]&&playerMask.collideBolean){
      
      player.spd=0
      //
      
      
    }else if(moveR[0]&&!playerMask.collideBolean){player.x+=player.spd}else
    if(moveL[0]&&playerMask.collideBolean){
      player.spd=0
      
      
    }else if(moveL[0]&&!playerMask.collideBolean){player.x-=player.spd}
   
    if (moveU[0]){
      player.y-=player.spd
 
    }else
    if(moveD[0]){
      player.y+=player.spd
      
    } 
   
 */


    if(!move[0]){
      player.spd=3
      
  
    }

   
  
      
  }

  export default MovePlayer