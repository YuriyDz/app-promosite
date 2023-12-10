import "./inputBotton.css";
import React from "react";
export const InterfaceTable = ({id, func, userOwner}) => {    
if(id == -1){
   return(
      <div className='form1'><b className='buttonLock'>change</b> <b className='buttonLock'><img src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.svg' width="20px" height="20px"/></b><b className='buttonLock'>cancel</b>
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
