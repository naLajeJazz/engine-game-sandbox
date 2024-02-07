import {mouseCollideBloco,bloco,mouse}from './globalVar.js'
import {click,dragable} from './controller.js'
import { canvas } from './obj.js';
import Obj from './obj.js'
let drag=false;
bloco[0].x=400;
bloco[1].x=600;
bloco[2].x=800;
bloco[3].x=1000;


  const DragDrop=()=>{
    
    
    
                  
                  
                  bloco[0].Draw("#0E7C7B");
                  bloco[0].hudMsg(bloco[0].x,bloco[0].y,"red","19px DePixel",bloco[0].y)
                  ///checa se drag
                  if (bloco[0].collideBolean&&dragable){
                    bloco[0].Draw("#17BEBB")
                    bloco[0].x=mouse.x
                    bloco[0].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    
                    if(bloco[0].y < canvas.height-64){  bloco[0].y+=2}
                  }
                  
                
                  
                  bloco[1].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[1].collideBolean&&dragable){
                    bloco[1].Draw("#17BEBB")
                    bloco[1].x=mouse.x
                    bloco[1].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    if(bloco[1].y < canvas.height-64){  bloco[1].y+=2}}


                  bloco[2].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[2].collideBolean&&dragable){
                    bloco[2].Draw("#17BEBB")
                    bloco[2].x=mouse.x
                    bloco[2].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    if(bloco[2].y < canvas.height-64){  bloco[2].y+=2}}



                  bloco[3].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[3].collideBolean&&dragable){
                    bloco[3].Draw("#17BEBB")
                    bloco[3].x=mouse.x
                    bloco[3].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    if(bloco[3].y < canvas.height-64){  bloco[3].y+=2}}

                  
  }
  export{drag}
  export default DragDrop