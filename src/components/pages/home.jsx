import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Items } from './homeMap';
import './home.css';
export const Home = ({funcC,func,user,userTickets,funcp}) => {
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
    window.localStorage.setItem('eventid', JSON.stringify(id));
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
<>
<div className='topTable'>
<button className='buttonsT' onClick={()=>next('r')}><b className='text1'>Regiser</b></button>
<button className='buttonsT' onClick={()=>next('l')}><b className='text1'>Login</b></button>
<button className='buttonsT' onClick={()=>next('u')}><b className='text1'>{user}</b></button>
<b className='MP'>Main page</b>
</div>
<header class="header">

        <h1>Кіберспортивна Подія</h1>
    </header>

    <section class="event-info">
        <div class="container">
            <div class="event-details">
                <h2>Деталі Події</h2>
                <ul >
                  
                
                   <>
                   {info.map(function(elements){
                    let idm;
                    for(let i in elements){
                        
                        idm = elements[i];
                        break;
                    }
                    
                    let dh = String(elements.dateToOpen).split(' ');
                        if(nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(elements.dateToOpen))===true){
                      return(
                         <button className='homeButtons' onClick={() =>isReady(idm,elements.name,elements.ticketPrice)}>
                         <p className='text'>{elements.name}</p>
                         <p className='text'>Час: {dh[1]}</p>
                         <p className='text'>Місце: {elements.place}</p>
                         <p className='text'> &copy; {dh[0]} Кіберспортивна Подія. Усі права захищені.</p>
                         <p className='text'>Ціна на квиток: {<nobr className='text2'>{elements.ticketPrice}$</nobr>}</p>
                         </button>
                         );}
                         else{
                            return(
                                <button className='homeButtonsF' onClick={()=>isReady(idm,elements.name,elements.ticketPrice)}>
                                <p className='textF'>{elements.name}</p>
                                <p className='textF'>Час: {dh[1]}</p>
                                <p className='textF'>Місце: {elements.place}</p>
                                <p className='textF'>&copy; {dh[0]} Кіберспортивна Подія. Усі права захищені.</p>
                                <p className='textF'>Ціна на квиток {<nobr className='text2'>{elements.ticketPrice}$</nobr>}</p>
                                </button>
                                );
                         }
                   })
                }                   
                   </>
                
                    <li>
                        <strong>Дата:</strong> 01 січня 2024
                    </li>
                    <li>
                        <strong>Час:</strong> 15:00
                    </li>
                    <li>
                        <strong>Місце:</strong> Ваша Адреса
                    </li>
                </ul>
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
</>
)
};
// <Items item={info} func={func}></Items>