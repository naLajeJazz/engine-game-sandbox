import {canvas} from './obj.js'
import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import { player,moveR,moveL,moveU,moveD, move,boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes, 
   push,
   boxesmask} from "./globalVar.js"
import { blockImg, dirtImg, grassImg, hairImg,
   pantsImg, playerImg, playerPushImg, roupaImg } from "./Img.js"


//cria os boxes aleatoriamente pela screen
for(let i=0;i<loteBoxes;i++){                                               
  boxes[i].x=Math.floor(Math.random()*canvas.width);
  boxes[i].y=Math.floor(Math.random()*canvas.height);
  }; 

  
const Animaboxes=()=>{
  
  for(let i=0;i<loteBoxes;i++){  
                                                
    boxes[i].Sprite(blockImg,boxes[i].w,boxes[i].h)
    }; 

}

const AnimaSp=()=>{

   /////Animaçao do movimento player 

   if (!push[0]&&moveR[0]&&moveU[0]){
        
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)

  }
else
if (!push[0]&&moveR[0]&&moveD[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else
if (!push[0]&&moveL[0]&&moveU[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
//player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
//player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
}else
if (!push[0]&&moveL[0]&&moveD[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
// player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else

  if (!push[0]&&moveR[0]){
    
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    //player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    
  }else
  if(!push[0]&&moveL[0]){
   
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
   // player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
  }else
  if (!push[0]&&moveU[0]){
   
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
  }else
  if(!push[0]&&moveD[0]){
    
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
   // player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  }else 
  if(!push[0]&&!move[0]){
 
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    //player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    //player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
  }


      //muda animação quando player empurrar boxes
      
      if(push[0]&&moveD[0]){   
        player.Draw("red")
      }else
      if(push[0]&&moveU[0]){
        player.Draw("red")
        }else
      if(push[0]&&moveL[0]){
        player.SpriteAnime(playerPushImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
        }  else
      if(push[0]&&moveR[0]){
        player.SpriteAnime(playerPushImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
        } 
            
}

export default {AnimaSp,Animaboxes}