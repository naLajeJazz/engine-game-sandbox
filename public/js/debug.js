
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,pointCollidePlayer2} from './globalVar.js'
import Obj from './obj.js'

moveToPoint



const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",` 
                  room${room}  
                  click  ${click}
                  debugMode  ${debugMode}   
                  drag  ${drag}   
                  dragable  ${dragable}
                  slimeDir  ${slimeDir}
                  move    ${move[0]}
                  moveToPoint    ${moveToPoint[0]}
                  pointCollidePlayer2    ${pointCollidePlayer2.collideBolean}
                
                    
                  
                    
                    
                  
                  
                  `)
}
export default Debugar