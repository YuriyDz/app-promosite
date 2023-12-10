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
        <li className='text'>To main page </li></button></div>
{(data.text.map((item,index1)=>{
    if(item[1] === undefined){return null;}
if(item[0]===1){
return(<h1 className='text.css'>{item[1]}</h1>);
    }
    else{
        return(<img className='imgS' src={item[1]}></img>);
    }
})
 )}


</div>
);
};