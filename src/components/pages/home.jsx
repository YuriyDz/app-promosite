import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from '@mui/material';
import { Items } from './homeMap';

import './home.css';
const CardNews = ({data,funcSetIndex,id,naw})=>{
    let a = data.text;
    if(a === undefined){
        return null;
    }
    
    let p1 = a[0];
    let p2 = a[1];
    //alert(id);
   const goToNewsPage=()=>{
    funcSetIndex(id);
      naw("/news", { replace: true });
   };
    return(
        <li>
<button className='newsTitle' onClick={goToNewsPage}>
    {p1[0]==2?<img src={p1[1]}></img>:<b>{p1[1]}</b>}
    {p2 === undefined?null:p2[0]==2?<img src={p2[1]}></img>:<b>{p2[1]}</b>}
    <p>Want khow more click the button</p>
    
</button>
</li>
    );
/*
return(
    <li>
<button className='newsTitle' onClick={()=>funcSetIndex(id)}>
 {(a.map((item,index)=>{
if(index === 2)
if(item[0]===1){
return(<p>{item[1]}</p>);
    }
    else{
        return null;//(<img src={item[1]}></img>);
    }
})
 )}
</button>
</li>
);//*/
return <p>{data.text}</p>
}

const Card = ({data, index,nowOrFuture,isReady,date}) =>{

//    let idm;
  /*  for(let i in elements){
        
        idm = elements[i];
        break;
    }*/
    
    let dh = String(data.dateToOpen).split(' ');
        if(nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(data.dateToOpen))===true){
      return(<li>
         <button className='homeButtons' /*onClick={() =>isReady(idm,data.name,data.ticketPrice)}*/onClick={()=>isReady(data.id,data.name,data.ticketPrice)}>
         <p className='text'>{data.name}</p>
         <p className='text'>Час: {dh[1]}</p>
         <p className='text'>Місце: {data.place}</p>
         <p className='text'> &copy; {dh[0]} Кіберспортивна Подія. Усі права захищені.</p>
         <p className='text'>Ціна на квиток: {<nobr className='text2'>{data.ticketPrice}$</nobr>}</p>
         </button>
         </li>
         );}
         else{
            return(<li>
                <button className='homeButtonsF' onClick={()=>isReady(data.id,data.name,data.ticketPrice)}>
                <p className='textF'>{data.name}</p>
                <p className='textF'>Час: {dh[1]}</p>
                <p className='textF'>Місце: {data.place}</p>
                <p className='textF'>&copy; {dh[0]} Кіберспортивна Подія. Усі права захищені.</p>
                <p className='textF'>Ціна на квиток {<nobr className='text2'>{data.ticketPrice}$</nobr>}</p>
                </button>
                </li>
                );
            }
   

};


export const Home = ({funcC,func,user,userTickets,funcp,funcSetIndex,news}) => {
    let date = new Date();
    const navigate = useNavigate();
const[info,setInfo]= useState(['nothing']);
async function getmas(){
    try{
  const a = await axios.get("http://localhost:3000/Events");

setInfo(a.data);
}
catch{
  console.error("Невдалось завантажити сторінку. Можливо у вас відсутнє підключення до інтернету");
  return;
}}
if(info[0]==="nothing"){
    getmas();
  }
console.log("ffssfsf",typeof(info));
 function next(s){
switch(s){
case 'l':
    navigate("/login", { replace: true });
    break;
case 'r':
    navigate("/register", { replace: true });
    break;
case 'u':
    if(user === 'quest'){
        alert("Ввійдіть в свій аккаунт або створіть його");
    }
    else{
    navigate("/userSettings",{replace: true});
    }
    break;
}
 }  
 function isReady(id,name,price){
    if(user === 'quest'){
        alert("Ввійдіть в свій аккаунт або створіть його");
        return; 
    }
   
   // alert(id);
  //eee  window.localStorage.setItem('eventid', JSON.stringify(id));
  funcp(id);
    let ut;
    let money;
for(let  i in userTickets){
    if(i === "mass of ticket"){
        ut = userTickets[i];
        }
    if(i === "money"){
        money = userTickets[i];
    }
}
for(let i of ut){
    if(i === name){
        navigate("/videoPage", { replace: true });
        return;
    }
}
//maye buti dialogove vikno
//if(prompt("Ви дійсно хочете купити квиток? Ви завжди зможете переглянути його в списку ваших квитків")===false){
  //  return;
//alert(money+" "+id);
if(money - price >=0){
    
    
    let obj = userTickets;
    let idu;
    for(let i in obj){
        if(i === 'id'){
            idu = obj[i];
        }
        if(i === 'mass of ticket'){
            obj[i].push(name);
        }
        if(i === 'money'){
            obj[i]  = money - price;
        }
    }
    funcC(obj,idu);
    funcp();
    navigate("/videoPage", { replace: true });
    
    return;
}
alert("У вас недостатньо коштів");
 } 
function nowOrFuture(datenow,dateevent){
    
    let d1 = dateevent.split(' ');
    let d2 = datenow.split(' ');
    let massivewithmounth = [0,31,59,90,120,151,181,212,243,273,304,334,365];
    let massd1 = d1[0].split('.');
    let massd2 = d2[0].split('.');
    let days1 = Number(massd1[0]) + massivewithmounth[Number(massd1[1])] + (365*Number(massd1[2]));
    let days2 = Number(massd2[0]) + massivewithmounth[Number(massd2[1])] + (365*Number(massd2[2]));
    
    if(days1 == days2){
        let h = d1[1].split(':');
        let hd = d2[1].split(':');
        let hfn = (Number(h[0])*60)+Number(h[1]);
        let hfd = (Number(hd[0])*60)+Number(hd[1]);
        //alert(hfn+" "+hfd);
        if(hfn>hfd){
             return true;
        }
    }
   
return false;
}

return (
<body className='bodyColor'>
<header className='topTable'>
<button className='buttonsT' onClick={()=>next('r')}><b className='text1'>Regiser</b></button>
<button className='buttonsT' onClick={()=>next('l')}><b className='text1'>Login</b></button>
<button className='buttonsT' onClick={()=>next('u')}><b className='text1'>{user} <img src="https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/setting-line-icon.svg" height="22px" width="22px"/></b></button>
<b className='MP'>Main page</b>
</header>
<div className='buttonsToogleSection'>

</div>

 <header class="header">

        
    </header>

    <section class="event-info">
        <div class="container">
            <div class="event-details">
            <p></p>
                <div className='CardTable'>
                    
                <div className='section'>
                <h1 className='forText'>Кіберспортивна Подія</h1>
                <h2 className='forText'>Деталі Події</h2> 
                   {info.map((item,index)=>(
                    <Card data={item} index={index} nowOrFuture={nowOrFuture} isReady={isReady} date = {date}/>
                   ))
                }  </div>
                <div className='section'>
                <h1 className='forText'>Новини Кіберспорту</h1>
                <h2 className='forText'>Деталі Новини</h2>                
                   {news.map((item,index)=>(
                    <CardNews data={item} funcSetIndex={funcSetIndex} id={index} naw={navigate}/>
                   ))
                }    </div>             
                  
                </div>
                 
            </div>
            <div class="event-description">
                <h2>Опис Події</h2>
                <p>
                    Тут може бути докладний опис кіберспортивної події.
                </p>
            </div>
        </div>
    </section>

    <footer class="footer">
        
    </footer>
</body>
)
};
// <Items item={info} func={func}></Items>