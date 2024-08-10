import { xIndexPlayer, yIndexPlayer } from "./anima.js"
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



   
      boxMask.DrawRect("blue",1)
     // boxMaskR.DrawRect("olive",1)
     // boxMaskL.DrawRect("red",1)
     // boxMaskD.DrawRect("blue",1)
     // boxMaskU.DrawRect("yellow",1)
      playerMask.DrawRect("orange",1)

     
 

    
    box.Draw("red")


   
    


    if (moveR[0]&&moveU[0]){
      player.spd=2
      player.x+=player.spd
      player.y-=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      
    }
 else

 if (moveR[0]&&moveD[0]){
  player.spd=2
  player.x+=player.spd
  player.y+=player.spd
  player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else
if (moveL[0]&&moveU[0]){
  player.spd=2
  player.x-=player.spd
  player.y-=player.spd
  player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
  player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
  player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
}else
if (moveL[0]&&moveD[0]){
  player.spd=2
  player.x-=player.spd
  player.y+=player.spd
  player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else

    if (moveR[0]&&!playerMask.collideBoleanR){
      
      player.x+=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
      
    }else
    if(moveL[0]&&!playerMask.collideBoleanL){
      player.x-=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    }else
    if (moveU[0]){
      player.y-=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    }else
    if(moveD[0]){
      player.y+=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
      player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    } 
   
  


    if(!move[0]){
      player.spd=3
      
      
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
      player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
      player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    }

   
  
      
  }

  export default MovePlayer