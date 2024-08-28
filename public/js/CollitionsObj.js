
import{mouseCollideBloco,bloco,orcs,loteOrcs,
   monitor,blocos,loteBlocos,mouse,
   pointCollidePlayer, player,point,pointCollidePlayer2,playerMask,
  player2,loteBoxes,boxesMaskD,boxesMaskL,boxesMaskU,boxesMaskR,boxes,
  move,moveR,moveL,moveU,moveD, playerMaskPushR,playerMaskPushD,playerMaskPushL,
  playerMaskPushU,
  boxesmask,
  grass,
  playerInteractDir
}from './globalVar.js'



const Collitions=()=>{
                  
///FIXA MASCARA DE COLLISÃO

mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;

pointCollidePlayer.x=point.x;
pointCollidePlayer.y=point.y;
                      
pointCollidePlayer2.x=point.x;
pointCollidePlayer2.y=point.y;

playerMask.x=player.x+24;
playerMask.y=player.y+46;

playerMaskPushR.x=player.x;
playerMaskPushR.y=player.y+8;

playerMaskPushL.x=player.x;
playerMaskPushL.y=player.y+8

playerMaskPushD.x=player.x;
playerMaskPushD.y=player.y+8;

playerMaskPushU.x=player.x;
playerMaskPushU.y=player.y+8;



for(let i=0;i<loteBoxes;i++){
///depois resolver isso
  boxes[0].x=grass.x+978;
  boxes[0].y=grass.y+554;

  boxes[1].x=grass.x+978;
  boxes[1].y=grass.y+654;

  boxes[2].x=grass.x+678;
  boxes[2].y=grass.y+654;
//
  boxesMaskD[i].x=boxes[i].x
  boxesMaskD[i].y=boxes[i].y+boxes[i].h+boxes[i].h/32

  boxesMaskL[i].x=boxes[i].x-boxes[i].w/32
  boxesMaskL[i].y=boxes[i].y

  boxesMaskU[i].x=boxes[i].x
  boxesMaskU[i].y=boxes[i].y-boxes[i].h/32

  boxesMaskR[i].x=boxes[i].x+boxes[i].w+boxes[i].w/32
  boxesMaskR[i].y=boxes[i].y

  boxesmask[i].x=boxes[i].x
  boxesmask[i].y=boxes[i].y

  };
  for(let i=0;i<loteBoxes;i++){
   
  
    boxesmask[i].x=boxes[i].x
    boxesmask[i].y=boxes[i].y
  
    };
  

///CHECA AS COLISOES DAS MASKS

mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h);

pointCollidePlayer.collide(player.x,player.y,player.w,player.h);

pointCollidePlayer2.collide(player2.x,player2.y,player2.w,player2.h);

for(let i=0;i<loteBoxes;i++){
  boxesMaskD[i].collide(playerMask.x,playerMask.y-4,playerMask.w,playerMask.h);
  boxesMaskL[i].collide(playerMask.x+4,playerMask.y,playerMask.w,playerMask.h);
  boxesMaskU[i].collide(playerMask.x,playerMask.y+4,playerMask.w,playerMask.h);
  boxesMaskR[i].collide(playerMask.x-4,playerMask.y,playerMask.w,playerMask.h);

  boxesmask[i].collide(playerInteractDir.x,playerInteractDir.y,playerInteractDir.w,playerInteractDir.h)
  };
                     
for(let i=0;i<loteOrcs;i++){
                  orcs[i].collide(mouse.x,mouse.y-32,mouse.w+64,mouse.h+64)
                  monitor.collide(orcs[i].x,orcs[i].y,orcs[i].w,orcs[i].h)
                };
                              
for(let i=0;i<loteBlocos;i++){
                  blocos[i].collide(mouse.x,mouse.y,mouse.w,mouse.h)
                  bloco[i].collide(mouse.x,mouse.y,mouse.w,mouse.h)
                  
                };
                              
                       
                //monitor.collide(mouse.x,mouse.y,mouse.w,mouse.h)  

                  

}

export default Collitions;