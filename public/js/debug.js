
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"




const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",` 
                  room${room}  
                  click  ${click}
                  debugMode  ${debugMode}   
                  drag  ${drag}   
                  dragable  ${dragable}
                    
                    
                  
                  
                  `)
}
export default Debugar