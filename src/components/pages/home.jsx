import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from '@mui/material';
import { Items } from './homeMap';

import './home.css';
const massMouth = ["Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"];
const measseges = ["Натисніть щоб зайти на матч якщо маєте квиток","Натисніть щоб дізнатись подробиці матчу","Натисніть щоб купити квиток","Натисніть щоб подивитись новину","Тут представлені матчі які відбудуться","Події в яких ви маєте прийняти участь"];
const CardNews = ({data,funcSetIndex,id,naw,type})=>{
    if(type!== 4){return null;}
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
    {p1[0]==2?<li><img src={p1[1]} height="300px" width="auto"></img></li>:<li className='textDetForOpis'>{p1[1]}</li>}
    {p2 === undefined?null:p2[0]==2?<li><img src={p2[1]}  height="300px" width="auto"></img></li>:<li className='textDetForOpis'>{p2[1]}</li>}
    <p className='textForNumbers'>Хочете знати більше натисніть</p>
    
</button>
</li>
    );

return <p>{data.text}</p>
}
const Card1 = ({data, index,nowOrFuture,isReady,type}) =>{
    if(type !== 5){return null;}
    let date = new Date();
    /* alert(data);
     for(let j in data){
      alert(j);
     }*/
  //    let idm;
    /*  for(let i in elements){
          
          idm = elements[i];
          break;
      }*/
    
      
      let dh = String(data.dateToOpen).split(' ');
      let dm = dh[0].split('.');
           // let t1 = data.teams[0];
            
            //let t2 =data.teams[1];
            //console.log(t1,t2);
            let m=[];
            
            
            console.log(data.teams);
            for(let i in data.teams){
              m.push(i);
           //   alert(data.teams[i]);
            }
         //   alert(m);
            
            /*
            let t1= m[0];
            let t2 = m[1];
            t1= data.teams[t1];
            t2=data.teams[t2];*/
          
              let ti = "";
              for(let j in data){
                  if(j === "teams"){ti = j;}
                  //alert(j);
              }
              let ar = data[ti];
           console.log(typeof(ar));
            let p =[];
            for(let u in ar){
              console.log(ar[u]);
                
                  //alert(u);
                  p.push(ar[u]);
                }
            
            let t1 = p[0];
            let t2 = p[1];
            let mu = [];
            console.log(t2);
               for(let l in t2){
                mu.push(t2[l]);
               }
              let mi = [];
          console.log(t1);
             for(let l in t1){
              mi.push(t1[l]);
             }
             
             let ret = ((Number(mi[2])+Number(mi[3])+Number(mi[4]))/mi[2]).toFixed(2);
             let ret2 = ((Number(mu[2])+Number(mu[3])+Number(mu[4]))/mu[2]).toFixed(2);
          if(nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(data.dateToOpen))===true){
      
        return(<li>
           <div className='homeButtons' /*onClick={() =>isReady(idm,data.name,data.ticketPrice)}*/>
           <li className='textDetForOpis'>Назва події: {data.name}</li>
           <li className='textDetForOpis'>Час: <nobr className="textForNumbers">{dh[1]}</nobr> Дата: <nobr className="textForNumbers">{dm[0]} {massMouth[Number(dm[1])-1]}</nobr> </li>
           <li className='textDetForOpis'>1 Команда: {mi[1]} Імена учасників:{data["gamers"].map(function(elements){
           
           if(mi[1]===elements.team){   
return(
<div >


    <div>
    <li></li>
    <li className="textForNumbers">{elements.name}</li>
    
    </div>
</div>
);}
})}</li>
           <li className='textDetForOpis'>2 Команда: {mu[1]} Імена учасників:{data["gamers"].map(function(elements){
           
            if(mu[1]===elements.team){
           return(
           <div>
          
           
               <div>
              
    <li className="textForNumbers">{elements.name}</li>
               </div>
           </div>
           );}
           })}</li>
           
           <li className='textDetForOpis'>Ціна на квиток: {<nobr className='text2'>{data.ticketPrice}$</nobr>}</li>
           </div>
           </li>
           );}
           
       //   }
  
  };
  const Card2 = ({data, index,nowOrFuture,isReady,type}) =>{
    if(type !== 6){return null;}
    let date = new Date();
    let a = index["match"];
    console.log(a);
    /* alert(data);
     for(let j in data){
      alert(j);
     }*/
  //    let idm;
    /*  for(let i in elements){
          
          idm = elements[i];
          break;
      }*/
    
      
      let dh = String(data.dateToOpen).split(' ');
      let dm = dh[0].split('.');
           // let t1 = data.teams[0];
            
            //let t2 =data.teams[1];
            //console.log(t1,t2);
            let m=[];
            
            
            console.log(data.teams);
            for(let i in data.teams){
              m.push(i);
           //   alert(data.teams[i]);
            }
         
          
              let ti = "";
              for(let j in data){
                  if(j === "teams"){ti = j;}
                  //alert(j);
              }
              let ar = data[ti];
           console.log(typeof(ar));
            let p =[];
            for(let u in ar){
              console.log(ar[u]);
                
                  //alert(u);
                  p.push(ar[u]);
                }
            
            let t1 = p[0];
            let t2 = p[1];
            let mu = [];
            console.log(t2);
               for(let l in t2){
                mu.push(t2[l]);
               }
              let mi = [];
          console.log(t1);
             for(let l in t1){
              mi.push(t1[l]);
             }
             let r = false;
             let ret = ((Number(mi[2])+Number(mi[3])+Number(mi[4]))/mi[2]).toFixed(2);
             let ret2 = ((Number(mu[2])+Number(mu[3])+Number(mu[4]))/mu[2]).toFixed(2);
           // alert(a);
          if(nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(data.dateToOpen))===true){
    
            for(let i in a){
        console.log(a[i],"dvkkbfkb");
        if(a[i] === data.name && data.name !== undefined){
            r = true;
            break;
        }}
        if(r === true){
     
        return(<li>
           <div className='homeButtons' /*onClick={() =>isReady(idm,data.name,data.ticketPrice)}*/>
           <li className='textDetForOpis'>Назва події: {data.name}</li>
           <li className='textDetForOpis'>Час: <nobr className="textForNumbers">{dh[1]}</nobr> Дата: <nobr className="textForNumbers">{dm[0]} {massMouth[Number(dm[1])-1]}</nobr> </li>
           <li className='textForNumbers'>Ви повинні прийняти участь у ції події</li>
           </div>
           </li>
           );}
          }
          else{
            return null;
          }
       //   }
  
  };
const Card = ({data, index,nowOrFuture,isReady,type}) =>{
    if( type ===5 || type ===4 || type === 6){return null;}
    let date = new Date();
  /* alert(data);
   for(let j in data){
    alert(j);
   }*/
//    let idm;
  /*  for(let i in elements){
        
        idm = elements[i];
        break;
    }*/
  
    
    let dh = String(data.dateToOpen).split(' ');
    let dm = dh[0].split('.');
         // let t1 = data.teams[0];
          
          //let t2 =data.teams[1];
          //console.log(t1,t2);
          let m=[];
          
          
          console.log(data.teams);
          for(let i in data.teams){
            m.push(i);
         //   alert(data.teams[i]);
          }
       //   alert(m);
          
          /*
          let t1= m[0];
          let t2 = m[1];
          t1= data.teams[t1];
          t2=data.teams[t2];*/
        
            let ti = "";
            for(let j in data){
                if(j === "teams"){ti = j;}
                //alert(j);
            }
            let ar = data[ti];
         console.log(typeof(ar));
          let p =[];
          for(let u in ar){
            console.log(ar[u]);
              
                //alert(u);
                p.push(ar[u]);
              }
          
          let t1 = p[0];
          let t2 = p[1];
          let mu = [];
          console.log(t2);
             for(let l in t2){
              mu.push(t2[l]);
             }
            let mi = [];
        console.log(t1);
           for(let l in t1){
            mi.push(t1[l]);
           }
           
           let ret = ((Number(mi[2])+Number(mi[3])+Number(mi[4]))/mi[2]).toFixed(2);
           let ret2 = ((Number(mu[2])+Number(mu[3])+Number(mu[4]))/mu[2]).toFixed(2);
           let time = nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(data.dateToOpen));
        if(time===true){
    
      return(<li>
         <button className='homeButtons' /*onClick={() =>isReady(idm,data.name,data.ticketPrice)}*/onClick={()=>isReady(data.id,data.name,data.ticketPrice)}>
         <li className='textDetForOpis'>Назва події: {data.name}</li>
         <li className='textDetForOpis'>Час: <nobr className="textForNumbers">{dh[1]}</nobr> Дата: <nobr className="textForNumbers">{dm[0]} {massMouth[Number(dm[1])-1]}</nobr> </li>
       <li className='textDetForOpis'>Місце проведення: <nobr className="textForNumbers">{data.place}</nobr></li>
         <li className='textDetForOpis'>1 Команда: <nobr className="textForNumbers">{mi[1]}</nobr> Загальний рейтинг: <nobr className="textForNumbers">{ret}</nobr></li>
                <li className='textDetForOpis'>2 Команда: <nobr className="textForNumbers">{mu[1]}</nobr> Загальний рейтинг: <nobr className="textForNumbers">{ret2}</nobr></li>
               
         <li className='textDetForOpis'>Ціна на квиток: {<nobr className='text2'>{data.ticketPrice}$</nobr>}</li>
         </button>
         </li>
         );}
         else{
            return(<li>
                <button className='homeButtonsF' onClick={()=>isReady(data.id,data.name,data.ticketPrice)}>
                <li className='textDetForOpis'>Назва події: {data.name}</li>
                <li className='textDetForOpis'>Час: <nobr className="textForNumbers">{dh[1]}</nobr> Дата: <nobr className="textForNumbers">{dm[0]} {massMouth[Number(dm[1])-1]}</nobr> </li>
       <li className='textDetForOpis'>Місце проведення: <nobr className="textForNumbers">{data.place}</nobr></li>
                <li className='textDetForOpis'>1 Команда: <nobr className="textForNumbers">{mi[1]}</nobr> Загальний рейтинг: <nobr className="textForNumbers">{ret}</nobr></li>
                <li className='textDetForOpis'>2 Команда: <nobr className="textForNumbers">{mu[1]}</nobr> Загальний рейтинг: <nobr className="textForNumbers">{ret2}</nobr></li>
                <li className='textDetForOpis'>Ціна на квиток {<nobr className='text2'>{data.ticketPrice}$</nobr>}</li>
                </button>
                </li>
                );
            }
     //   }

};


export const Home = ({funcC,func,user,userTickets,funcp,funcSetIndex,news}) => {
    let date = new Date();
    const navigate = useNavigate();
const[info,setInfo]= useState(['nothing']);
const[swichMode,setSwichMode]=useState(1);
//const[margin,setMargin]=useState([0,1000,2000,3000]);
async function getmas(){
    try{
  const a = await axios.get("http://localhost:3000/Events");

await setInfo(a.data);
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
  if(swichMode === 2){
    navigate("/info", { replace: true });
    return;
  }
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
        (swichMode === 1?navigate("/videoPage", { replace: true }):alert("Ви вже купили цей квиток"));
        return;
    }
}
//maye buti dialogove vikno
//if(prompt("Ви дійсно хочете купити квиток? Ви завжди зможете переглянути його в списку ваших квитків")===false){
  //  return;
//alert(money+" "+id);
if(swichMode === 3){
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
    //navigate("/videoPage", { replace: true });
    alert("Ви успішно купили квиток на "+name);
    return;
}
alert("У вас недостатньо коштів");
 }} 
 const swickm = (a) => {
    if(user==="quest" && swichMode === 5 && a === 1){
        a=-4;
    }
    if(user==="quest" && swichMode === 1 && a === -1){
        a=4;
    }
if(swichMode === 6 && a === 1){
   a=-5;
}
if(swichMode === 1 && a=== -1){
    a=5;
}
setSwichMode(swichMode + a);
 };
function nowOrFuture(datenow,dateevent){
    //alert(dateevent+" "+datenow);
    let d1 = dateevent.split(' ');
    let d2 = datenow.split(' ');
    let massivewithmounth = [0,31,59,90,120,151,181,212,243,273,304,334,365];
    let massd1 = d1[0].split('.');
    let massd2 = d2[0].split('.');
    let days1 = Number(massd1[0]) + massivewithmounth[Number(massd1[1])] + (365*Number(massd1[2]));
    let days2 = Number(massd2[0]) + massivewithmounth[Number(massd2[1])] + (365*Number(massd2[2]));
    if(days1>days2){
        return true;
    }
    if(days1 == days2){
        let h = d1[1].split(':');
        let hd = d2[1].split(':');
        let hfn = (Number(h[0])*60)+Number(h[1]);
        let hfd = (Number(hd[0])*60)+Number(hd[1]);
          
        if(hfn>hfd){
             return true;
        }
    }
   
return false;
}
console.log(userTickets);
return (
<body className='bodyColor'>
<header className='topTable'>
<button className='buttonsT' onClick={()=>next('r')}><b className='text1'>Regiser</b></button>
<button className='buttonsT' onClick={()=>next('l')}><b className='text1'>Login</b></button>
<button className='buttonsT' onClick={()=>next('u')}><b className='text1'>{user} <img src="https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/setting-line-icon.svg" height="22px" width="22px"/></b></button>
<b className='MP'>Main page</b>
</header>
<div className='buttonsToogleSection'>
<button className='homeButtonToogle' onClick={()=>swickm(-1)}  ></button>
<button className='homeButtonToogle1'onClick={()=>swickm(1)}></button>
</div>

 <header class="header">

        
    </header>

    <section class="event-info">
        <div class="container">
            <div class="event-details">
            <p></p>
                <div className='CardTable'>
                    
                <div className='section' id='toEvent'>
                <h2 className='forText'>{measseges[swichMode-1]}</h2> 
                   {info.map((item,index)=>(
                    <Card data={item} index={index} nowOrFuture={nowOrFuture} isReady={isReady} type={swichMode}/>
                   ))
                }  
                   {info.map((item,index)=>(
                    <Card1 data={item} index={index} nowOrFuture={nowOrFuture} isReady={isReady} type={swichMode}/>
                   ))
                }  
                      
                   {news.map((item,index)=>(
                    <CardNews data={item} funcSetIndex={funcSetIndex} id={index} naw={navigate} type={swichMode}/>
                   ))
                }
                {info.map((item,index)=>(
                    <Card2 data={item} index={userTickets===undefined?null:userTickets["carrier"]} nowOrFuture={nowOrFuture} type={swichMode}/>
                   ))
                }    
                </div>        
                  
                </div>
                 
            </div>
            <div class="event-description">
                <h2></h2>
                <p>
                   
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