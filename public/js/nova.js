import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import { player,moveR,moveL,moveU,moveD } from "./globalVar.js"
import { playerImg } from "./Img.js"
import Obj from "./obj.js"



  
  const Novo=()=>{
                  
   
    if (moveR[0]){
      player.x+=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    }else
    if(moveL[0]){
      player.x-=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    }else
    if (moveU[0]){
      player.y-=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    }else
    if(moveD[0]){
      player.y+=player.spd
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    }else{
      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    }

  
      
  }

  export default Novo