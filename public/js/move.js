import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import AnimaSp from "./animaSprite.js"
import { debugMode } from "./controller.js"
import { player,moveR,moveL,moveU,moveD, move,box, boxMask, playerMask, boxMaskL, boxMaskR, boxMaskD, boxMaskU, grass, ground, loteGrround, dirT, lotedirt } from "./globalVar.js"
import { dirtImg, grassImg, hairImg, pantsImg, playerImg, roupaImg } from "./Img.js"
import Obj from "./obj.js"






  const MovePlayer=()=>{


    for(let i=0;i<loteGrround;i++){                                               
      ground[i].Sprite(grassImg,64,64)
      };  

      for(let i=0;i<lotedirt;i++){                                               
        dirT[i].Sprite(dirtImg,64,64)
        };  


        //AnimaSp()
   
      boxMask.DrawRect("blue",1)
     // boxMaskR.DrawRect("olive",1)
     // boxMaskL.DrawRect("red",1)
     // boxMaskD.DrawRect("blue",1)
     // boxMaskU.DrawRect("yellow",1)
      playerMask.DrawRect("orange",1)

     
 

    
   


   
    


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

    if (moveR[0]&&!playerMask.collideBoleanR){
      
      player.x+=player.spd
      
      
    }else
    if(moveL[0]&&!playerMask.collideBoleanL){
      player.x-=player.spd
      
    }else
    if (moveU[0]){
      player.y-=player.spd
 
    }else
    if(moveD[0]){
      player.y+=player.spd
      
    } 
   
  


    if(!move[0]){
      player.spd=3
      
  
    }

   
  
      
  }

  export default MovePlayer