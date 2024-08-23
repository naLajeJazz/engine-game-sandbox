import{monitor,slime,player,player2, butterfly}from './globalVar.js'


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



///anima Sprite
let xIndexPlayer=0;
let yIndexPlayer=0;
let animaSpdPlayer=8//tem que ser multiplos de 2
setInterval(()=>xIndexPlayer+=player.w,1000/animaSpdPlayer);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexPlayer=0,4000/animaSpdPlayer);//quando chegar na ultima imagem volta pra primeira



///anima Sprite
let xIndexPlayer2=0;
let yIndexPlayer2=0;
let animaSpdPlayer2=8//tem que ser multiplos de 2
setInterval(()=>xIndexPlayer2+=player2.w,1000/animaSpdPlayer2);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexPlayer2=0,4000/animaSpdPlayer2);//quando chegar na ultima imagem volta pra primeira



///anima Sprite
let xIndexButt=0;
let yIndexButt=0;
let animaSpdButt=8//tem que ser multiplos de 2
setInterval(()=>xIndexButt+=butterfly.w,1000/animaSpdButt);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexButt=0,4000/animaSpdButt);//quando chegar na ultima imagem volta pra primeira


export{
                  xIndex,
                  yIndex,
                  xIndexSlime,
                  yIndexSlime,
                  xIndexPlayer,
                  yIndexPlayer,
                  xIndexPlayer2,
                  yIndexPlayer2,
                  xIndexButt,
                  yIndexButt
}