
import{mouseCollideBloco,bloco,orcs,loteOrcs, monitor,blocos,loteBlocos,mouse,
   pointCollidePlayer, player,point,pointCollidePlayer2,
  player2,box,boxMask,playerMask,
  boxMaskR,
  boxMaskL,
  boxMaskU,
  boxMaskD}from './globalVar.js'



const col=()=>{
                  
///fixa mascara de colisão
mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;

pointCollidePlayer.x=point.x;
pointCollidePlayer.y=point.y;
                      
pointCollidePlayer2.x=point.x;
pointCollidePlayer2.y=point.y;

boxMask.x=box.x;
boxMask.y=box.y;



playerMask.x=player.x;
playerMask.y=player.y;



                                    


///checa as colisoes das masks
mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h);

pointCollidePlayer.collide(player.x,player.y,player.w,player.h);

pointCollidePlayer2.collide(player2.x,player2.y,player2.w,player2.h);

//boxMask.collide(playerMask.x,playerMask.y,playerMask.w,playerMask.h);

playerMask.collide(boxMask.x,boxMask.y,boxMask.w,boxMask.h);
//playerMask.collide(boxMaskL.x,boxMaskL.y,boxMaskL.w,boxMaskL.h);

//boxMaskR.collide(playerMask.x,playerMask.y,playerMask.w,playerMask.h);
//boxMaskL.collide(playerMask.x,playerMask.y,playerMask.w,playerMask.h);
//boxMaskD.collide(playerMask.x,playerMask.y,playerMask.w,playerMask.h);
//boxMaskU.collide(playerMask.x,playerMask.y,playerMask.w,playerMask.h);



                       
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