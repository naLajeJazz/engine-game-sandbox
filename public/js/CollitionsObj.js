import{mouseCollideBloco,mouse,bloco}from './script.js'



const col=()=>{
                  
///fixa mascara de colisão
mouseCollideBloco.x=mouse.x;
mouseCollideBloco.y=mouse.y;


///checa as colisoes das masks
mouseCollideBloco.collide(bloco.x,bloco.y,bloco.w,bloco.h);

}

export default col;