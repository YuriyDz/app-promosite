import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './news.css';


export const NewsPage=({data,index})=>{
    const naw = useNavigate();

    if(data === undefined || data[index] === undefined || data[index].text === undefined){
        
        return null;
    }
    
    data=data[index];
    const backTomainPage = () =>{
      return naw('/', { replace: true });
    }
return(
<div className='back'>
    <div className='upcomponent'><h1 className='textMain'>News reviewed</h1><button className='buttonsa' onClick={()=>backTomainPage()}>
        <li className='text'><img src="data:image/png;base64,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" width="20" height="20"/> </li></button></div>
{(data.text.map((item,index1)=>{
    if(item[1] === undefined){return null;}
if(item[0]===1){
return(<div className='textBoxi'><h1 className='texto'>{item[1]}</h1></div>);
    }
    else{
        return(<img className='imgS' src={item[1]}></img>);
    }
})
 )}


</div>
);
};