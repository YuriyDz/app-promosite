import "./inputBotton.css";
import React from "react";
export const InterfaceTable = ({id, func, userOwner}) => {    
if(id == -1){
   return(
      <p className='form'><b className='buttonLock'>change</b> <b className='buttonLock'>delete</b><b className='buttonLock'>cancel</b>
         <b className='buttonLock'>copy</b> 
      </p>
   );
}
else{
    if(userOwner == true){
       return(
          <p className='form'>
             <button className='buttonOk' onClick={() => func(1)}> change</button> <button className='buttonOk' onClick={() => func(2)}> delete</button><button className='buttonOk' onClick={() => func(3)}> cancel</button>
             <button className='buttonOk' onClick={() => func(4)}> copy</button>
          </p>
       );
    }
else{
   return(
       <p className='form'><b className='buttonLock'>change</b> <b className='buttonLock'>delete</b><button className='buttonOk' onClick={() => func(3)}> cancel</button>
          <button className='buttonOk' onClick={() => func(4)}> copy</button>
       </p>
   );
}
}

};
