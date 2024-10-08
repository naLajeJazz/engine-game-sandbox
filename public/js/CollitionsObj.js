
import{mouseCollideBloco,bloco,orcs,loteOrcs,
   monitor,blocos,loteBlocos,mouse,
   pointCollidePlayer, player,point,pointCollidePlayer2,playerMask,
  player2,loteBoxes,boxesMaskD,boxesMaskL,boxesMaskU,boxesMaskR,boxes,
  move,moveR,moveL,moveU,moveD
}from './globalVar.js'



const col=()=>{
                  
///FIXA MASCARA DE COLLISÃO

mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;

pointCollidePlayer.x=point.x;
pointCollidePlayer.y=point.y;
                      
pointCollidePlayer2.x=point.x;
pointCollidePlayer2.y=point.y;

playerMask.x=player.x+14;
playerMask.y=player.y+38;

for(let i=0;i<loteBoxes;i++){
    
  boxesMaskD[i].x=boxes[i].x
  boxesMaskD[i].y=boxes[i].y+boxes[i].h+boxes[i].h/32

  boxesMaskL[i].x=boxes[i].x-boxes[i].w/32
  boxesMaskL[i].y=boxes[i].y

  boxesMaskU[i].x=boxes[i].x
  boxesMaskU[i].y=boxes[i].y-boxes[i].h/32

  boxesMaskR[i].x=boxes[i].x+boxes[i].w+boxes[i].w/32
  boxesMaskR[i].y=boxes[i].y
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

export default col;