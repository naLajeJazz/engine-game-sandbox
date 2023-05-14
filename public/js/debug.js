import { click } from "./controller.js"
import {debug} from './controller.js'
import{onOff} from './script.js'



const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"white","19px DePixel",`  
                  click  ${click}   
                  
                  
                  `)
}
export default Debugar