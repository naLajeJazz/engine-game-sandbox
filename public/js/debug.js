
import {debug,debugMode,click,room} from './controller.js'
import { drag } from "./DragDrop.js"
import{onOff} from './OnOff.js'



const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",` 
             room ${room}
                  click  ${click}   
                  debugMode  ${debugMode}   
                  drag  ${drag}   
                  onOff  ${onOff}   
                    
                  
                  
                  `)
}
export default Debugar