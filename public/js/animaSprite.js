
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
   grass,
   pedra,
   room,
   camera,
   cameraMove,
   cameraDir,
   cameraDiagonal,
  } from "./globalVar.js"
import { blockImg, dirtImg, grassImg, hairImg,
   pantsImg, playerImg, playerPushImg, roupaImg } from "./Img.js"
import { debugMode } from './controller.js';
import Obj from "./obj.js";




const AnimaPlayer=()=>{

   /////Animaçao do movimento player 
  
  player.hudMsg(player.x,player.y,"white","20px DePixel",`x: ${player.x }  y: ${player.y} `)
   camera.DrawRect("red",6,0.5)
   camera.hudMsg(camera.x,camera.y,"white","20px DePixel",`cam x: ${camera.x }  cam y :${camera.y}`)
   camera.hudMsg(camera.x,camera.y+64,"white","20px DePixel",`grass x: ${grass.x } grass y: ${grass.y} cameraDir ${cameraDir} cameraMove ${cameraMove[0]} cameraDiagonal ${cameraDiagonal} `)

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



      
          
  };

const AnimaElements=()=>{
    ///desenha elemento pedra na tela
    if(room[0]==3){
    //pedra.SpriteAnime(blockImg,0,0,64,64)
    }

    /*
      ///desenha os boxesmask na tela
      for(let i=0;i<loteBoxes;i++){   
        boxesMaskL[i].DrawRect("blue",0.5)
        boxesMaskR[i].DrawRect("green",0.5)
        boxesMaskD[i].DrawRect("yellow",0.5)
        boxesMaskU[i].DrawRect("white",0.5)
        boxes[i].Draw("red",0.2)};
  */
   
  }    

export default {AnimaPlayer,AnimaElements}