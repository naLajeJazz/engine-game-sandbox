
import {mouseCollideBloco,bloco,monitor,slime,orcs,
                  loteOrcs,blocos,loteBlocos,text,txt,rand}from './globalVar.js'
                  import {mouse,click} from './controller.js'
                  let onOff=false;

const OnOff=()=>{
                  for(let i=0;i<loteBlocos;i++){
 


                                    if(blocos[i].collideBolean&&click&&!onOff){
                                      onOff=true
                                     
                                    }else if(blocos[i].collideBolean&&click&&onOff){
                                      onOff=false
                                    }
                                     if(onOff){
                                      blocos[i].Draw("red")
                                     }else{
                                      blocos[i].Draw("green")
                                     }
                                       
                                    };                         
                                    
}
export{onOff}
export default OnOff