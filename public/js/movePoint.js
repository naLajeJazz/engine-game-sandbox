import { xIndexPlayer, xIndexPlayer2, yIndexPlayer, yIndexPlayer2 } from "./anima.js"
import { player,moveR,moveL,moveU,moveD, move, pointActive, 
  pointCollidePlayer2, point, mouse, moveToPoint, player2,
  moveR2,moveL2,moveU2,moveD2,move2 } from "./globalVar.js"
import { player2Img } from "./Img.js"
import Obj from "./obj.js"

import MovePlayer from "./move.js"
import { room } from "./controller.js"

import {canvas} from './obj.js'

  const MovePoint=()=>{
                   
    player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2,player2.w,player2.h)

   


   




///pega a posiçao do point
if(pointActive[0]&& moveToPoint[0]){
                 
                  point.x=mouse.x
                  point.y=mouse.y

                
}


                  if(moveToPoint[0]&&pointCollidePlayer2.collideBolean==false){

                       
                    point.Draw("6ad69d",0.5)
                    point.DrawLine(point.x+point.w/2,point.y+point.h/2,
player2.x+player2.w/2,player2.y+player2.h/2,"6ad69d",1,0.6)


                  if(player2.x<point.x){
                                     
                    player2.x+=player2.spd
                   // player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+128,player2.w,player2.h)
                    moveR2[0]=true

                     }
                     if(player2.x>point.x) {
                                      
                      player2.x-=player2.spd
                    // player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64,player2.w,player2.h)
                      moveL2[0]=true

                  
                    } 
                    if(player2.y>point.y){
                                      
                      player2.y-=player2.spd
                     // player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64*3,player2.w,player2.h)
                      moveU2[0]=true;

                     
                      
                     
                     }
                     if(player2.y<point.y) {
                                      
                      player2.y+=player2.spd
                      //player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2,player2.w,player2.h)
                      moveD2[0]=true;

                     
                    
                    } 

                  }

                  
                  if(pointCollidePlayer2.collideBolean){
                       // player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64*4,player2.w,player2.h)

                    /*
                    moveR2[0]=false
                    moveL2[0]=false
                    moveU2[0]=false
                    moveD2[0]=false
                    player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64*4,player2.w,player2.h)

                    */
                  }

/*
                if (moveR2[0]){
                    player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+128,player2.w,player2.h)
                  } if (moveL2[0]){
                    player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64,player2.w,player2.h)
                  } if (moveD2[0]){
                    //player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2,player2.w,player2.h)
                  } if (moveU2[0]){
                   // player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64*3,player2.w,player2.h)
                  } if (moveD2[0]&&moveU2[0]){
                    //player2.SpriteAnime(player2Img,xIndexPlayer2,yIndexPlayer2+64*3,player2.w,player2.h)
                  }
                  
                  
                  */
                  
                


                  
  }

  export default MovePoint