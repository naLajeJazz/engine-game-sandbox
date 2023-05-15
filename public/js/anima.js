import{monitor,slime}from './globalVar.js'


///anima Sprite
let xIndex=0;
let yIndex=0;
let animaSpd=4  //velocidade da animaçao
setInterval(()=>xIndex+=monitor.w,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexSlime=0;
let yIndexSlime=0;
let animaSpdSlime=8//tem que ser multiplos de 2
setInterval(()=>xIndexSlime+=slime.w,1000/animaSpdSlime);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexSlime=0,8000/animaSpdSlime);//quando chegar na ultima imagem volta pra primeira

export{
                  xIndex,
                  yIndex,
                  xIndexSlime,
                  yIndexSlime
}