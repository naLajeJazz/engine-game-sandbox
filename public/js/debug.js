
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { slimeDir} from './globalVar.js'




const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",` 
                  room${room}  
                  click  ${click}
                  debugMode  ${debugMode}   
                  drag  ${drag}   
                  dragable  ${dragable}
                  slimeDir  ${slimeDir}   
                  
                    
                    
                  
                  
                  `)
}
export default Debugar