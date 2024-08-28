import {mouse,moveR,moveL,moveU,moveD, move, pointActive, moveToPoint, player } from './globalVar.js';
import Obj from './obj.js'
import {canvas} from './obj.js'


let debug=new Obj(0,0,0,0),

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


//////GAMEPAD JOYSTICK///

window.addEventListener("gamepadconnected",()=>{
  console.log("Gamepad conectado")
})
window.addEventListener("gamepaddisconnected",()=>{
  console.log("Gamepad desconectado")
})

let previusButtonStates=[]
const updateGamepadstatus=()=>{
const gamepads = navigator.getGamepads();

  if(gamepads[0]){
  const gamepad = gamepads[0];

    if (!previusButtonStates[gamepad.index]){
      previusButtonStates[gamepad.index]=gamepad.buttons.map(button=>button.pressed)
    }



  
  gamepad.buttons.forEach((button,index)=>{

const wasPressed=previusButtonStates[gamepad.index][index];
const isPressed= button.pressed;

if(isPressed&&!wasPressed){
  console.log(`botao${index}foi pressionado`)
  if(index==15){
    moveR[0]=true
  }else
  if(index==14){
    moveL[0]=true
  }else
  if(index==12){
    moveU[0]=true
  }else
  if(index==13){
    moveD[0]=true
  }else
  if(index==0){
    player.spd=6
  }
 
  
  
}
if (!isPressed&&wasPressed){
  console.log(`botao${index}foi solto`)
  if(index==15){
    moveR[0]=false
  }else
  if(index==14){
    moveL[0]=false
  }else
  if(index==12){
    moveU[0]=false
  }else
  if(index==13){
    moveD[0]=false
  }
}
previusButtonStates[gamepad.index][index]=isPressed


/*
                  if(button.pressed){
                    console.log(`botao ${index}`);
                  }
                   gamepad.axes.forEach((axis,index)=>{
                      console.log(`eixo ${index}:${axis}`);
                    })*/
  })
 
  }

}
export default updateGamepadstatus


export {
                  debug,
                  debugMode,
                
                  click,
                  room,
                  dragable,
                  
        
}