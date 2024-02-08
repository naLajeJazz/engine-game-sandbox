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
               
                  ///checa se drag
                  if (bloco[0].collideBolean&&dragable){
                    bloco[0].Draw("#17BEBB")
                    bloco[0].x=mouse.x
                    bloco[0].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    
                    
                  }
                  
                
                  
                  bloco[1].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[1].collideBolean&&dragable){
                    bloco[1].Draw("#17BEBB")
                    bloco[1].x=mouse.x
                    bloco[1].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    }


                  bloco[2].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[2].collideBolean&&dragable){
                    bloco[2].Draw("#17BEBB")
                    bloco[2].x=mouse.x
                    bloco[2].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                    }



                  bloco[3].Draw("#0E7C7B");
                  ///checa se drag
                  if (bloco[3].collideBolean&&dragable){
                    bloco[3].Draw("#17BEBB")
                    bloco[3].x=mouse.x
                    bloco[3].y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false;
                 }

                  
  }
  export{drag}
  export default DragDrop