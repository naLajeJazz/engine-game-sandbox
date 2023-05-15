
import Obj from './obj.js'
import {canvas} from './obj.js'


let debug=new Obj(600,0,64,64);
let mouse=new Obj(200,300,64,64),
 debugMode=true,
 click=false,
 dragable=false;
 let room=0





////controles////

////teclado

window.addEventListener("keyup",()=>{
               
                
               
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

  }else if (k=="t"){
  debugMode=true           
  }else if (k=="y"){
  debugMode=false           
  }
  else if (k=="f"){
                
  }
  else if (k=="g"){
                
  }
  else if (k=="e"){
                  
  }
  else if (k=="q"){
               
  }
  else if (k=="p"){
                 
  }
  else if (k=="o"){
      
  }
  else if (k=="x"){
       
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
  
dragable=true
 
},false);
canvas.addEventListener('mouseup',function(){
  click=false
  dragable=false
  
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);

/////////



export {
                  debug,
                  debugMode,
                  mouse,
                  click,
                  room,
                  dragable
        
}