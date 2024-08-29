import Obj, {canvas} from './obj.js'
import { xIndexPlayer, yIndexPlayer } from "./anima.js"
import { player,moveR,moveL,moveU,moveD, move,boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes, 
   push,
   boxesmask,
   playerDir,
   playerInteractDir,
   interact,
   playerBoxMsg,
   grass} from "./globalVar.js"
import { blockImg, dirtImg, grassImg, hairImg,
   pantsImg, playerImg, playerPushImg, roupaImg } from "./Img.js"
import { debugMode } from './controller.js';



  
const Animaboxes=()=>{
  if(!debugMode){

   
  for(let i=0;i<loteBoxes;i++){  
                                                
    boxes[i].Draw("red")
   
    }; 

}
}

const AnimaPlayer=()=>{







   /////Animaçao do movimento player 
   
   playerInteractDir.DrawRect("white",0.2);

   if (!push[0]&&moveR[0]&&moveU[0]){
        
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)

  }
else
if (!push[0]&&moveR[0]&&moveD[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else
if (!push[0]&&moveL[0]&&moveU[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
}else
if (!push[0]&&moveL[0]&&moveD[0]){

player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
 player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
//player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
}else
              ////Move Right////

  if (!push[0]&&moveR[0]){

    playerInteractDir.x=player.x+64
    playerInteractDir.y=player.y
 

    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    
  }else
              ////Move Left////

  if(!push[0]&&moveL[0]){

    playerInteractDir.x=player.x-64
    playerInteractDir.y=player.y
   
   
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
  }else
            ///Move UP
  
  if (!push[0]&&moveU[0]){

    playerInteractDir.x=player.x
    playerInteractDir.y=player.y-64

 
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
  }else
                ////Move Down

  if(!push[0]&&moveD[0]){

    playerInteractDir.x=player.x
    playerInteractDir.y=player.y+64


    
    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer,player.w,player.h)
  }else
  //////NO MOVE//// 
  if(!push[0]&&!move[0]){
////D dir
    if(playerDir[0]==2){
      playerInteractDir.x=player.x
      playerInteractDir.y=player.y+68

    player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*4,player.w,player.h)
    }else
    if(playerDir[0]==0){
////R dir
playerInteractDir.x=player.x+64


      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*6,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*6,player.w,player.h)
      //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+128,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*6,player.w,player.h)
    }else
    if(playerDir[0]==1){
////L dir
playerInteractDir.x=player.x-64


      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*5,player.w,player.h)
    player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*5,player.w,player.h)
    //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64,player.w,player.h)
    player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*5,player.w,player.h)
    }
    else
    if(playerDir[0]==3){
////U dir
playerInteractDir.x=player.x
playerInteractDir.y=player.y-64

      player.SpriteAnime(playerImg,xIndexPlayer,yIndexPlayer+64*7,player.w,player.h)
      player.SpriteAnime(roupaImg,xIndexPlayer,yIndexPlayer+64*7,player.w,player.h)
      //player.SpriteAnime(pantsImg,xIndexPlayer,yIndexPlayer+64*3,player.w,player.h)
      player.SpriteAnime(hairImg,xIndexPlayer,yIndexPlayer+64*7,player.w,player.h)
    }

    
    
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

export default {AnimaPlayer,Animaboxes}