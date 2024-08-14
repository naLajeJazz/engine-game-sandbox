import {mouse,moveR,moveL,moveU,moveD, move, pointActive, moveToPoint, player } from './globalVar.js';
import Obj from './obj.js'
import {canvas} from './obj.js'


let debug=new Obj(60,0,64,64),

 debugMode=false,
 click=false,
 dragable=false;
 let room=3

////controles////

////teclado

window.addEventListener("keyup",()=>{

  moveR[0]=false
  moveL[0]=false
  moveU[0]=false
  moveD[0]=false
  move[0]=false
               
},false);

window.addEventListener("keydown",function(event){

  let k= event.key;
   
   if (k=="0"){

    room=0

  }else if
 (k =="1" ){
room=1
 
                        
  }else if (k=="2"){

room=2

  }
  else if (k=="4"){

    room=4
    
      }else if (k=="t"){
  debugMode=true           
  }else if (k=="y"){
  debugMode=false           
  }
  else if (k=="3"){
        room=3  
        
  }
  else if (k=="5"){
    room=5  
    
}
  else if (k=="d"){
    moveR[0]=true
    move[0]=true
  }
  else if (k=="a"){
    moveL[0]=true 
    move[0]=true    
  }
  else if (k=="w"){
    moveU[0]=true 
    move[0]=true     
  }
  else if (k=="s"){
    moveD[0]=true 
    move[0]=true    
  }
  else if (k=="o"){
    
  }
  else if (k=="x"){
    

  }
  
  else if (k=="p"){
   

  }
  
  else if (k=="z"){
       
  }

  },false);


///mouse
  
canvas.addEventListener('mousemove',function(e){
  mouse.x=e.offsetX;
  mouse.y=e.offsetY;

  
},false);

canvas.addEventListener('click',function(e){

  click=true
  setTimeout(() => {
    click=false
  }, 12);
  
},false);

canvas.addEventListener('mousedown',function(){
  
dragable=true;
pointActive[0]=true;
moveToPoint[0]=true;

 
},false);
canvas.addEventListener('mouseup',function(){
  click=false;
  dragable=false;
  pointActive[0]=false;
  
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);

/////////



export {
                  debug,
                  debugMode,
                
                  click,
                  room,
                  dragable,
                  
        
}