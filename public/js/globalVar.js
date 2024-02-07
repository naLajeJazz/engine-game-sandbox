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




//



let orcs=[];
let loteOrcs=800;
for(let i=0;i<loteOrcs;i++){
  orcs[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),1,1,Math.floor(Math.random()*8));
  
};

let player = new Obj(canvas.width/2,canvas.height/2,64,64,3),
moveR=[false],
moveL=[false],
moveU=[false],
moveD=[false];




export{ mouseCollideBloco,bloco,monitor,slime,orcs,loteOrcs,blocos,
loteBlocos,text,txt,rand,onOffBtn,slimeDir,player,moveR,mouse,moveL,moveU,moveD}

