
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,pointCollidePlayer2,player,boxMask, playerMask, boxMaskR, boxMaskL, moveL, moveU, moveD} from './globalVar.js'
import Obj from './obj.js'

moveToPoint



const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"red","20px DePixel",` 
                  player.x ${player.x}
                  player.y ${player.y}
                  boxMask.x ${boxMask.x+boxMask.w}
                  boxMask.y ${boxMask.y} move ${move[0]}`)
                debug.hudMsg(debug.x-100,debug.y+42,"red","20px DePixel",`
                  playerMask.collideBolean ${playerMask.collideBolean} 
                  collideBoleanR ${playerMask.collideBoleanR} 
                  collideBoleanL ${playerMask.collideBoleanL}
                  collideBoleanU ${playerMask.collideBoleanU}
                  collideBoleanD ${playerMask.collideBoleanD}`)
}
export default Debugar