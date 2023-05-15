import {mouseCollideBloco,bloco}from './globalVar.js'
import {mouse,click} from './controller.js'
let drag=false;
  
  const DragDrop=()=>{
                  bloco.Draw("#0E7C7B");
    
                  //checa se click
                  if (mouseCollideBloco.collideBolean&&click){
                    bloco.Draw("#17BEBB")
                  }
                  ///checa se drag
                  if (mouseCollideBloco.collideBolean&&click){
                    bloco.x=mouse.x
                    bloco.y=mouse.y
                  
                    
                  drag=true
                  
                  }else{drag=false}
  }
  export{drag}
  export default DragDrop