
import Obj from './obj.js'
import {canvas} from './obj.js'

let debug=new Obj(600,0,64,64);
let mouse=new Obj(200,300,64,64),
 debugMode=true,
 click=false;





////controles////

////teclado

window.addEventListener("keyup",()=>{
               
                
               
},false);

window.addEventListener("keydown",function(event){

  let k= event.key;
             
  if (k == "d" ){
                         
 

  }else if(k =="a" ){

 
                        
  }else if (k=="w"){



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
  }, 10);
  
},false);

canvas.addEventListener('mousedown',function(){
  click=true
 
 
},false);
canvas.addEventListener('mouseup',function(){
  click=false
 
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);

/////////



export {
                  debug,
                  debugMode,
                  mouse,
                  click
        
}