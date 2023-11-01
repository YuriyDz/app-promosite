import { useState , useRef} from 'react';
export function ReturnMass(chatData,index){
if(chatData.length < 4){
    return chatData;
}
else{
    if(index + 4 > chatData.length){
        index = chatData.length - 4;
    }
    return[chatData[index],chatData[index+1],chatData[index+2],chatData[index+3]];
}
}
export function Slap() {
const[slapIndex,setSlapIndex]=useState(0);
const[slapRange,setSlapRange]=useState(1);
function slapGo(){
setSlapIndex(slapIndex+slapRange);
//ReturnMass(chatData,slapIndex);
}
return(
<div>
<button onClick={slapGo(slapRange)}>^</button>
<button onClick={slapGo(-slapRange)}>v</button>
<button></button>
<button></button>
</div>
);
}