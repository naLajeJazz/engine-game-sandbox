
import {debug,debugMode,click,room,dragable} from './controller.js'
import { drag } from "./DragDrop.js"
import { move, moveR, moveToPoint, slimeDir,
  pointCollidePlayer2,player, moveL, 
  moveU, moveD,
  playerMask,
  loteBoxes, boxes, boxesMaskD,
  boxesMaskU,boxesMaskR,boxesMaskL, push,
   playerMaskPushR, playerMaskPushD, 
   playerMaskPushU, playerMaskPushL, boxesmask} from './globalVar.js'
import Obj from './obj.js'

const Debugar=()=>{
                  debug.hudMsg(debug.x,debug.y+16,"red","20px DePixel",` 
                  player.spd ${player.spd}
                  push ${push[0]}
                  move ${move[0]}
                  boxesmask ${boxes[0].collideBolean}
                  

                  `)
                debug.hudMsg(debug.x-100,debug.y+42,"green","20px DePixel",`
                
                
               
                  `)


                 
                  if (debugMode){
                    playerMaskPushR.Draw("red",0.5)
                    playerMask.DrawRect("orange",1)
                    boxes[0].Draw("red",0.2)
                    boxes[1].Draw("blue",0.2)
                    boxes[2].Draw("green",0.2)
                   
                    for(let i=0;i<loteBoxes;i++){
                      
                      boxesMaskL[i].DrawRect("blue")
                      boxesMaskR[i].DrawRect("green")
                      boxesMaskD[i].DrawRect("yellow")
                      boxesMaskU[i].DrawRect("white")
                      
                    };}            
                   
}
export default Debugar