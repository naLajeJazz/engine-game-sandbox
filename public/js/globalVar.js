import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'
import {debug, debugMode,mouse,click } from './controller.js'

canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";
////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5),
text=["Olá Rodrigo!","Oque vamos criar hoje?","Engine Game"];
let rand= 0;
setInterval(() => {rand=Math.floor((Math.random() * text.length) ) }, 5000);

let monitor=new Obj(canvas.width/2-150,canvas.height/2-150,300,300);

let slime=new Obj(monitor.x,monitor.y-64,64,64);


let mouseCollideBloco=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);

let blocos=[]
let loteBlocos=3
for(let i=0;i<loteBlocos;i++){
 blocos[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),64,64)
};

let bloco=new Obj(300,200,64,64);

let orcs=[];
let loteOrcs=800;
for(let i=0;i<loteOrcs;i++){
  orcs[i]=new Obj(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),1,Math.floor(Math.random()*8),Math.floor(Math.random()*8));
  
};

let onOff=false;
let drag=false;




export{ mouseCollideBloco,bloco,monitor,slime,orcs,loteOrcs,blocos,
loteBlocos,text,txt,rand,onOff,drag}

