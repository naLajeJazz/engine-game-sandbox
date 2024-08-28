import { player,moveR,moveL,moveU,moveD, move,boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes, 
   push,
   boxesmask,
   playerDir,
   playerInteractDir,
   interact,
   playerBoxMsg} from "./globalVar.js"


  ////box msg


const boxesInteracts=()=>{


 if(interact[0]){

    if (boxesmask[0].collideBolean){
                  playerBoxMsg.hudMsg(player.x+player.w/2,player.y-32,"white","30px DePixel","?");                            
    }
    if (boxesmask[1].collideBolean){
                  playerBoxMsg.hudMsg(player.x+player.w/2,player.y-32,"white","30px DePixel","???");                            
    }
    
}





}

  export default boxesInteracts
