import {debug,debugMode,click,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,
  pointCollidePlayer2,player, moveL, 
  moveU, moveD,
  playerMask,
  loteBoxes, boxes, boxesMaskD,
  boxesMaskU,boxesMaskR,boxesMaskL, push,
   playerMaskPushR, playerMaskPushD, 
   playerMaskPushU, playerMaskPushL, boxesmask, 
   creatureRand, creatureDir, playerDir,
    playerInteractDir, interact,room, grass, moveRu, moveLu, moveRd, moveLd} from './globalVar.js'
import Obj from './obj.js'
import {canvas} from './obj.js'
const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"red","20px DePixel",` 
                  player.spd ${player.spd}
                  room ${room[0]}
                  creatureDir ${creatureDir}
                  gras.spd ${grass.spd}
                  
                  

                  `)
                debug.hudMsg(debug.x,debug.y+48,"white","22px DePixel",`
move ${move} 
  playerDir ${playerDir}
  R: ${moveR[0]}
  L: ${moveL[0]}
  U: ${moveU[0]}
  D: ${moveD[0]}
  Ru: ${moveRu[0]}
  Rd: ${moveRd[0]}
  Lu: ${moveLu[0]}
  Ld: ${moveLd[0]}
               
                  `)


                 
                  if (debugMode){
                    playerMaskPushR.Draw("red",0.5)
                    playerMask.DrawRect("orange",1)
                    boxes[0].Draw("red",0.2)
                    boxes[1].Draw("blue",0.2)
                    boxes[2].Draw("green",0.2)
                    boxes[3].Draw("white",0.2)
                    
                   
                    }            
                   
}
export default Debugar