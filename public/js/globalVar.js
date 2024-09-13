import Obj from './obj.js'
import {canvas} from './obj.js'

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


//canvas.width=screen.availWidth;
//canvas.height=screen.availHeight;

//canvas.width=screen.width;
//canvas.height=screen.height;




canvas.style.backgroundColor="black";


////Objetos////

let room=[3];
let mouse=new Obj(200,300,64,64);

//
let txt=new Obj(canvas.width/2,canvas.height/2-50,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Engine Game"];
//

let rand= 0;
setInterval(() => {rand=Math.floor((Math.random() * text.length) ) }, 5000);

let monitor=new Obj(canvas.width/2-150,canvas.height/2-150,300,300);

//






//
let creature=new Obj(100,100,64,64,0),
creatureDir=[0],
creatureRand=0;
//setInterval(() => {creatureDir=[creatureRand=Math.floor((Math.random() * 2) )] }, 5000);
//
let butterfly=new Obj(canvas.width/2,canvas.height/2,16,16,0.1);

//
let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
let blocos=[],onOffBtn=[], bloco=[];
let loteBlocos=4
for(let i=0;i<loteBlocos;i++){
 blocos[i]=new Obj(300,300,32,32);
 bloco[i]=new Obj(300,300,64,64);
 onOffBtn[i]=false
};

//


 let dirT=[]
 
 let lotedirt=200
 for(let i=0;i<lotedirt;i++){
  dirT[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height))
  };
//

let orcs=[];
let loteOrcs=800;
for(let i=0;i<loteOrcs;i++){
  orcs[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),1,1,Math.floor(Math.random()*8));
  
};

let player = new Obj(canvas.width/2,canvas.height/2,64,64,3),
playerDir=[2],
playerInteractDir=new Obj(player.x,player.y,player.w,player.h),
interact=[false],
playerBoxMsg=new Obj(),
moveR=[false],
moveL=[false],
moveU=[false],
moveD=[false],
moveRu=[false],
moveLu=[false],
moveRd=[false],
moveLd=[false],
move=[false],
push=[false],
playerMask=new Obj(player.x,player.y,player.w-48,player.h-48),
playerMaskPushR=new Obj(player.x,player.y,player.w,player.h),
playerMaskPushL=new Obj(player.x,player.y,player.w,player.h),
playerMaskPushU=new Obj(player.x,player.y,player.w,player.h),
playerMaskPushD=new Obj(player.x,player.y,player.w,player.h),
roupa= new Obj(player.x,player.y,player.w,player.h),
pants= new Obj(player.x,player.y,player.w,player.h);



///point  
let point=new Obj(player.x,player.y,8,8),
    pointCollidePlayer=new Obj(point.x,point.y,point.w,point.h),
    pointActive=[false],
    moveToPoint=[false];


    let player2 = new Obj(canvas.width/2,canvas.height/2,64,64,0.8),
    moveR2=[false],
    moveL2=[false],
    moveU2=[false],
    moveD2=[false],
    move2=[false],
    pointCollidePlayer2=new Obj(point.x,point.y,point.w,point.h);

    
//
let boxes=[];
let boxesmask=[];
let boxesMaskL=[];
let boxesMaskR=[];
let boxesMaskD=[];
let boxesMaskU=[];
let loteBoxes=4;
for(let i=0;i<loteBoxes;i++){
  boxes[i]=new Obj()
  boxesmask[i]=new Obj(boxes[i].x,boxes[i].y,boxes[i].w,boxes[i].h)
  boxesMaskL[i]=new Obj()
  boxesMaskR[i]=new Obj()
  boxesMaskD[i]=new Obj()
  boxesMaskU[i]=new Obj()
  
};


let pedra=new Obj()


let grass=new Obj(-453,-246,2000,1200,player.spd);


 let slime=new Obj(300,300,64,64,0.1),slimeDir="parado";
 setInterval(() => {
   slimeDir="e"
 }, 4000);
 setInterval(() => {
   slimeDir="d"
 }, 8000);


let camera=new Obj(player.x-320,player.y-192,704,448)

export{ mouseCollideBloco,bloco,monitor,slime,orcs,loteOrcs,blocos,
loteBlocos,text,txt,rand,onOffBtn,slimeDir,player,moveR,mouse,moveL,
moveU,moveD,move,pointCollidePlayer,pointActive,point,moveToPoint,
player2,moveR2,moveL2,moveU2,moveD2,move2 ,pointCollidePlayer2,grass,dirT,lotedirt,roupa,pants,boxes,boxesMaskD,boxesMaskL,
boxesMaskR,boxesMaskU,loteBoxes,playerMask,push,playerMaskPushU,
playerMaskPushD,playerMaskPushL,playerMaskPushR,boxesmask,
creatureRand, creatureDir,butterfly,playerDir,playerInteractDir,
interact,playerBoxMsg,room,pedra,camera,moveLd,moveLu,moveRd,moveRu


}

