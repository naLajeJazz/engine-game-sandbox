import Obj from './obj.js'
import {canvas} from './obj.js'



canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";





////Objetos////


let mouse=new Obj(200,300,64,64);



//
let txt=new Obj(canvas.width/2,canvas.height/2-50,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Engine Game"];
//

let rand= 0;
setInterval(() => {rand=Math.floor((Math.random() * text.length) ) }, 5000);

let monitor=new Obj(canvas.width/2-150,canvas.height/2-150,300,300);

//
let slime=new Obj(monitor.x+1,monitor.y-64,64,64,0.5),slimeDir="";
setInterval(() => {
  slimeDir="e"
}, 4000);
setInterval(() => {
  slimeDir="d"
}, 8000);
//

//
let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
let blocos=[],onOffBtn=[], bloco=[];
let loteBlocos=4
for(let i=0;i<loteBlocos;i++){
 blocos[i]=new Obj(300,300,32,32);
 bloco[i]=new Obj(300,300,64,64);
 onOffBtn[i]=false
};

let ground=[]
let grass=new Obj(200,200),
loteGrround=40
for(let i=0;i<loteGrround;i++){
 ground[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height))
 };

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

let player = new Obj(0,0,64,64,3),
moveR=[false],
moveL=[false],
moveU=[false],
moveD=[false],
move=[false],
playerMask=new Obj(player.x,player.y,player.w,player.h),
roupa= new Obj(player.x,player.y,player.w,player.h),
pants= new Obj(player.x,player.y,player.w,player.h);



///point  
let point=new Obj(player.x,player.y,8,8),
    pointCollidePlayer=new Obj(point.x,point.y,point.w,point.h),
    pointActive=[false],
    moveToPoint=[false];


    let player2 = new Obj(canvas.width/2,canvas.height/2,64,64,1.5),
    moveR2=[false],
    moveL2=[false],
    moveU2=[false],
    moveD2=[false],
    move2=[false],
    pointCollidePlayer2=new Obj(point.x,point.y,point.w,point.h);

    
let box= new Obj(300,300,128,128),
boxMask=new Obj(box.x,box.y,64,64),
boxMaskR=new Obj(box.x+box.w+box.w/32,box.y,box.w/box.w,box.h),
boxMaskL=new Obj(box.x-box.w/32,box.y,box.w/box.w,box.h),
boxMaskU=new Obj(box.x,box.y-box.h/32,box.w,box.h/box.h),
boxMaskD=new Obj(box.x,box.y+box.h+box.h/32,box.w,box.h/box.h);

















export{ mouseCollideBloco,bloco,monitor,slime,orcs,loteOrcs,blocos,
loteBlocos,text,txt,rand,onOffBtn,slimeDir,player,moveR,mouse,moveL,
moveU,moveD,move,pointCollidePlayer,pointActive,point,moveToPoint,
player2,moveR2,moveL2,moveU2,moveD2,move2 ,pointCollidePlayer2,box,
boxMask,playerMask,boxMaskD,boxMaskL,boxMaskR,boxMaskU,grass,ground,
loteGrround,dirT,lotedirt,roupa,pants


}

