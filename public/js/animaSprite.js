import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import { debugMode } from "./controller.js"
import { player,moveR,moveL,moveU,moveD, move,
   grass, ground, loteGrround, dirT, lotedirt,boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes } from "./globalVar.js"
import { blockImg, dirtImg, grassImg, hairImg,
   pantsImg, playerImg, roupaImg } from "./Img.js"
import Obj from "./obj.js"


const AnimaSp=()=>{


  for(let i=0;i<loteBoxes;i++){                                               
    boxes[i].Sprite(blockImg,boxes[i].w,boxes[i].h)
    }; 

    
    if (moveR[0]&&moveU[0]){
        
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        
      }
   else
  
   if (moveR[0]&&moveD[0]){
 
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  }else
  if (moveL[0]&&moveU[0]){
    
    
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
  }else
  if (moveL[0]&&moveD[0]){
  
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  }else
  
      if (moveR[0]){
        
     
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
        
      }else
      if(moveL[0]){
       
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
      }else
      if (moveU[0]){
       
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      }else
      if(moveD[0]){
        
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
      } 
     
    
  
  
      if(!move[0]){
     
        
        
        player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
        player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
        player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
        player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
      }


      
     

}

export default AnimaSp