
import {blocos,onOffBtn,loteOrcs, orcs}from './globalVar.js'
import {click} from './controller.js'
import { canvas } from './obj.js';

    //posiciona botoes
    blocos[0].x=400;
    blocos[1].x=500;
    blocos[2].x=600;
    blocos[3].x=700;
    
                   

const OnOff=()=>{

  
 

                                    ///interaçoes de cada botao separado
                                    if(blocos[0].collideBolean&&click&&!onOffBtn[0]){
                                      onOffBtn[0]=true
                                     
                                    }else if(blocos[0].collideBolean&&click&&onOffBtn[0]){
                                      onOffBtn[0]=false
                                    }
                                     if(onOffBtn[0]){
                                      blocos[0].Draw("red")
                                     
                                     }else{
                                      blocos[0].Draw("green")
                                     }
                                     //
                                    if(blocos[1].collideBolean&&click&&!onOffBtn[1]){
                                      onOffBtn[1]=true
                                     
                                    }else if(blocos[1].collideBolean&&click&&onOffBtn[1]){
                                      onOffBtn[1]=false
                                    }
                                     if(onOffBtn[1]){
                                      blocos[1].Draw("red")
                                     }else{
                                      blocos[1].Draw("green")
                                     }
                                     //
                                    if(blocos[2].collideBolean&&click&&!onOffBtn[2]){
                                      onOffBtn[2]=true
                                     
                                    }else if(blocos[2].collideBolean&&click&&onOffBtn[2]){
                                      onOffBtn[2]=false
                                    }
                                     if(onOffBtn[2]){
                                      blocos[2].Draw("red")
                                     }else{
                                      blocos[2].Draw("green")
                                     }
                                     //
                                    if(blocos[3].collideBolean&&click&&!onOffBtn[3]){
                                      onOffBtn[3]=true
                                     
                                    }else if(blocos[3].collideBolean&&click&&onOffBtn[3]){
                                      onOffBtn[3]=false
                                    }
                                     if(onOffBtn[3]){
                                      blocos[3].Draw("red")
                                     }else{
                                      blocos[3].Draw("green")
                                     };

                                     if(onOffBtn[0]&&onOffBtn[1]&&onOffBtn[2]&&onOffBtn[3]){
                                      for(let i=0;i<loteOrcs;i++){
 
                                        let randi=[];
                                        randi[i]=Math.random()
                                        orcs[i].y+=randi[i]
                                                                           
                                        if(orcs[i].y>canvas.height){
                                        orcs[i].y=-32
                                        }
                                                                           
                                                                                        
                                        if(orcs[i].collideBolean){
                                          orcs[i].hudMsg(orcs[i].x,orcs[i].y,"#FF99C8","14px DePixel ","♥");
                                          }else{orcs[i].Draw("#A9DEF9");}
                                                                                                      
                                                                          
                                        
                                                                           
                                                                             
                                        };  
                                     }
                                        
};    
                                                         
                                    


export default OnOff