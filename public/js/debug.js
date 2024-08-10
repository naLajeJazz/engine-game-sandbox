
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,pointCollidePlayer2,player,boxMask, playerMask, boxMaskR, boxMaskL, moveL, moveU, moveD} from './globalVar.js'
import Obj from './obj.js'

moveToPoint



const Debugar=()=>{
                  debug.hudMsg(debug.x+400,debug.y+16,"red","24px DePixel",` 
                  
                  move ${move[0]}
                  moveR ${moveR[0]}
                  moveL ${moveL[0]}
                  moveU ${moveU[0]}
                  moveD ${moveD[0]}
                  player.spd ${player.spd}
                  
                `)
                debug.hudMsg(debug.x+200,debug.y+42,"green","24px DePixel",`
                 
                  playerMask.collideBolean ${playerMask.collideBolean} 
                  boxMaskR ${boxMaskR.collideBolean} 
                  boxMaskL ${boxMaskL.collideBolean} 
                  collideBoleanR ${playerMask.collideBoleanR} 
                  collideBoleanL ${playerMask.collideBoleanL} 
                    
                  `)
}
export default Debugar