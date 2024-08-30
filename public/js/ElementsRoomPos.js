import { boxes, boxesmask, boxesMaskD, boxesMaskL,
 boxesMaskR, boxesMaskU, loteBoxes, pedra, room } from "./globalVar.js"
import Obj from "./obj.js"

const boxesPosition=()=>{
                
                
                                
                  if(room[0]==3){

                  ///tamanho da boxe collisão
                  
                  //boxes[0].w=200
                  //boxes[0].h=200

                  //boxes[1].w=300
                  //boxes[1].h=300
                  
                  boxes[2].w=pedra.w
                  boxes[2].h=pedra.h

                  ///posição da boxe collisão
                 

                  //boxes[0].x=400
                  //boxes[0].y=20

                  //boxes[1].x=100
                  //boxes[1].y=360

              ///EX. fixando o boxe de colisao no elemento pedra
                  boxes[2].x=pedra.x
                  boxes[2].y=pedra.y
                                   
                  }

                  
                  
};

const elementsPosition=()=>{
                  
                  if(room[0]==3){
                  ///pedra 
                  pedra.x=100;
                  pedra.y=100;
                  pedra.w=64;
                  pedra.h=64;}
};

export default {boxesPosition, elementsPosition}