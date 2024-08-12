
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,pointCollidePlayer2,player,boxMask, playerMask, boxMaskR, boxMaskL, moveL, moveU, moveD, boxMaskU, boxMaskD} from './globalVar.js'
import Obj from './obj.js'





const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"red","20px DePixel",` 
                  player.x ${player.x}
                  player.y ${player.y}
                  moveL ${moveL}
                  moveR ${moveR}
                  player.spd ${player.spd}

                  `)
                debug.hudMsg(debug.x-100,debug.y+42,"green","20px DePixel",`
                  boxMaskL.collideBolean ${boxMaskL.collideBolean}
                  boxMaskR.collideBolean ${boxMaskR.collideBolean}
                  boxMaskU.collideBolean ${boxMaskU.collideBolean}
                  boxMaskD.collideBolean ${boxMaskD.collideBolean}
                  
                  `)
}
export default Debugar