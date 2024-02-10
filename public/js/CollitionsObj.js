
import{mouseCollideBloco,bloco,orcs,loteOrcs, monitor,blocos,loteBlocos,mouse,
   pointCollidePlayer, player,point,pointCollidePlayer2,
  player2}from './globalVar.js'



const col=()=>{
                  
///fixa mascara de colisão
mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;

pointCollidePlayer.x=point.x;
pointCollidePlayer.y=point.y;
                      
pointCollidePlayer2.x=point.x;
pointCollidePlayer2.y=point.y;
                                    


///checa as colisoes das masks
mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h);

pointCollidePlayer.collide(player.x,player.y,player.w,player.h)

pointCollidePlayer2.collide(player2.x,player2.y,player2.w,player2.h)

                       
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