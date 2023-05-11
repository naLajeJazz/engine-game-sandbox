import{mouseCollideBloco,mouse,bloco,orcs,loteOrcs}from './script.js'



const col=()=>{
                  
///fixa mascara de colisão
mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;


                      
                 


///checa as colisoes das masks
mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h);
                       
for(let i=0;i<loteOrcs;i++){
                  orcs[i].collide(mouse.x-128,mouse.y-128,mouse.w+128,mouse.h+128)
                  
                };
                              


}

export default col;