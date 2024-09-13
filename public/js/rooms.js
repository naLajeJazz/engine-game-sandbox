import {canvas} from './obj.js'
import { player,moveR,moveL,moveU,moveD, move,
   dirT, lotedirt, boxes, boxesMaskD,
   boxesMaskU,boxesMaskR,boxesMaskL,
   loteBoxes,
   playerMask,
   playerMaskPushR,
   grass,
   room,
   pedra,
   camera,
   grass2,
  
} from "./globalVar.js"
import { blockImg, dirt2Img, dirtImg, grass2Img, grassImg } from "./Img.js"
import { debugMode } from './controller.js';
import boxesPosition from './ElementsRoomPos.js';
import ElementsRoomPos from './ElementsRoomPos.js';




const Tiles=()=>{

if(!debugMode&&room[0]==3){
   
///background tiles set
///o sistema de camera pode manipular grass w e grass h
grass.Sprite(grassImg,2000,1200);
grass2.Sprite(grass2Img,canvas.width,canvas.height);

}else{
        canvas.style.backgroundColor="black";
      }
};

const RoomObjects=()=>{

///collitions boxes positions
ElementsRoomPos.boxesPosition();

///posicao de objetos(ja com suas colisoes)
ElementsRoomPos.elementsPosition();

  }

export default{Tiles,RoomObjects} 