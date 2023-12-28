import "./inputBotton.css";
import React from "react";
const changeOk = "data:image/png;base64,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"
export const InterfaceTable = ({id, func, userOwner}) => {    
if(id == -1){
   return(
      <div className='form1'><b className='buttonLock'>Change</b> <b className='buttonLock'><img src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.svg' width="20px" height="20px"/></b><b className='buttonLock'>cancel</b>
         <b className="buttonLock">copy</b> 
         
         
      </div>
      
   );
}
else{
    if(userOwner === true){
       return(
          <div className='form1'>
             <button className='buttonOk' onClick={() => func(1)}> change</button> <button className='buttonOk' onClick={() => func(2)}><img src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/green-trash-can-icon.svg' width="20px" height="20px"/></button><button className='buttonOk' onClick={() => func(3)}> cancel</button>
             <button className='buttonOk' onClick={() => func(4)}>copy</button>
          </div>
       );
    }
else{
   return(
       <div className='form1'><b className='buttonLock'>change</b> <b className='buttonLock'><img src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.svg' width="20px" height="20px"/></b><button className='buttonOk' onClick={() => func(3)}> cancel</button>
          <button className='buttonOk' onClick={() => func(4)}>copy</button>
       </div>
   );
}
}

};
