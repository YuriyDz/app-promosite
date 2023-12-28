import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './pageI.css';
export const PageInfo = ({id , type,userData,user,func})=>{
   
    if(id === -1){
        id = JSON.parse(window.localStorage.getItem('eventid')) ?? [];
      }
      let date = new Date();
    const navigate = useNavigate();
    const[team,setTeam]=useState('?');
    const[userInfo,setUserInfo]=useState(0);
    const[info,setInfo]= useState({"oo":'nothing'});
    const[openModals,setOpenModals]=useState(1);
    const[infoForOneTeam,setInfoForOneTeam]=useState(['nothing']);
    const[infoForTwoTeam,setInfoForTwoTeam]=useState(['nothing']);
    const[splitType,setSplitType]=useState(1);
    const[mm,setMm]=useState([0,0]);
    const[descriptionGamer,setDescriptionGamer]=useState('');
    
    if(userInfo === 0){
      
        for(let i in userData){
                console.log(userData[i],user,i);
                if(String(user) === i){
                setUserInfo(userData[user]);
            break;
            }   
        }}
        const handleBirthdateChange = (e) => {
            setDescriptionGamer(e.target.value);
          };
    //const[margin,setMargin]=useState([0,1000,2000,3000]);
    async function getmas(){
        try{
      const a = await axios.get("http://localhost:3000/Events/"+String(id));
    console.log(a.data);
    await setInfo(a.data);
    
    }
    catch{
      console.error("Невдалось завантажити сторінку. Можливо у вас відсутнє підключення до інтернету");
      return;
    }}
    if(info.oo==="nothing"){
        getmas(); 
        console.log(id);
        
      }
     
      const getInfoTeam=(a,index)=>{
        let maxb = 0;
        let maxk = 0;
        let maso;
         for(let o in info){
           
              if(o === "gamers"){
                maso = info[o];
              }
        }
        console.log(maso);
        for(let i in maso){
          
             if(maso[i]["wins"]>maxk){
                maxk = maso[i]["wins"];
             }
             if(maso[i]["lose"]>maxb){
                maxb = maso[i]["lose"];
             }

        }
       // alert(`${maxb} ${maxk}`)
        setMm([300/maxk,300/maxb]);
      //  console.log(a);
        let mem;
        for(let o in a){
           
            if(o === "teams"){
                mem = a[o];
            }
           // console.log(mem);
        }
        for(let i in mem){
            
            if(i === index){
              //  alert("ljg")
                mem = mem[i]; 
            }
        }
      //  console.log(mem);
        let retMas=[];
        for(let j in mem){
            retMas.push(mem[j]);
        }
       
        return retMas;
      };
      const openTeam2 = () =>{
              setOpenModals(infoForOneTeam[1]);
      };
      const openTeam1 = () =>{
        setOpenModals(infoForTwoTeam[1]);
      };
      if(infoForOneTeam[0]==="nothing" && info.oo !== "nothing"){
        setInfoForOneTeam(getInfoTeam(info,"0"));
        setInfoForTwoTeam(getInfoTeam(info,"1"));
      }
      //let infoForOneTeam=[];
      //let infoForTwoTeam=[];
   let count=0;
    const getCount = () =>{
        let c = 0;
       
        for(let i of info["gamers"]){
           
            if(i["team"] === openModals){
                c++;
            }
        }
        count = c;
        return c;
    };
     const openDetailsCommand=()=>{
         setOpenModals("details");
     };
      if(info.oo === "nothing"){
        return null;
      }
      getCount();
      const goToMainPage=()=>{
          
        navigate("/", { replace: true });

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
    const startRestr = () =>{
        for(let i of info["gamers"]){
            if(i["name"] === userInfo["name"]){
                alert("Ви вже приймаєте участь у цій події");
                return;
            }
        }
        if(nowOrFuture(date.getDate()+"."+String(Number(date.getMonth())+1)+"."+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes(),String(info.dateToOpen))===true){
               setSplitType(2);   
        }
       else{
      alert("Реєстрація вже не дійсна");
        }}
        
        if(splitType === 2){
            let m = [];
            for(let i in userInfo){
            //    alert(userInfo[i]);
                m.push(userInfo[i]);
            }
           const changeTeam = (a) => {
            setTeam(a);
           }
           const finishReg = () =>{
            if(team === "?"){
                alert("Вкажіть назву команди");
                return;
            }
            let obj = info;
            let idForAdd = 0;
            for(let i of info["gamers"]){
                 idForAdd = i["id"];
            }
            let objadd = {
                "id": idForAdd+1,
                "team": team,
                "name": m[1],
                "details": descriptionGamer,
                "image": null,
                "lose": 0,
                "wins": 0
            }
            obj["gamers"].push(objadd);
            console.log(obj);
            let objP = userInfo;
            objP["carrier"]["match"].push(info["name"]);
            console.log(objP);
            alert(id);
            axios.patch("http://localhost:3000/Events/"+String(id),obj);
            func(objP,m[0]);
            getmas();
            setSplitType(1);
            goToMainPage();
        }
            console.log(userInfo);
            //userInfo.map((e)=>{console.log(e)});
               return(
               <div>
                
                   
                <li className="textB">Ваше ім'я {m[1]}</li>
                <li className="textB">Ви приймали участь {m[4]["wins"]+m[4]["lose"]+m[4]["drawl"]}</li>
                <li className="textB">Ви вигравали {m[4]["wins"]}</li>
                <li className="textB">Ви програвали {m[4]["lose"]}</li>
                <li className="textB">Ви грали в нічию {m[4]["drawl"]}</li>
                <li className="textB">Ви бажаєте зареєструватись на {info["name"]}</li>
                <li className="textB">Виберіть команду в яку ви хочете зареєструватись</li>
             
<button className='buttonSubmitChanges3' type="submit" onClick={()=>changeTeam(infoForOneTeam[1])}>{infoForOneTeam[1]}</button>
        <button className='buttonSubmitChanges3' type="submit" onClick={()=>changeTeam(infoForTwoTeam[1])}>{infoForTwoTeam[1]}</button>
        <li className="textB">Ви граєте в комнді {team}</li>
        <li className="textB">Добавте опису про себе</li>
        <div className="divForRegButt">
        <label className="tableClassName" htmlFor="birthdate"></label>
              <input 
                type="text"
                id="birthdate"
                value={descriptionGamer}
                onChange={handleBirthdateChange}
              />
              </div>
        <li className="textB">Ваш опис: {descriptionGamer}</li>
        <div className="divForRegButt">
<button className="button1" onClick={finishReg}>Підтвердити реєстрацію</button>
</div>
               </div>
               );
        }
        else{
      if(openModals === "details"){
        return(
            <div>
        {type === 1?<div className="formMain10">
            <b className="textName">Назва події: {info["name"]}</b>
           <button  className="buttonsb" onClick={goToMainPage}><img src="data:image/png;base64,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" width="20" height="20"/></button>
           <button  className="buttonsba" onClick={startRestr}>Зареєструватись на подію</button>

        </div>: null}
        <div className="buttondiv2">
        <button className='buttonSubmitChanges3' type="submit" onClick={openTeam1}>{infoForOneTeam[1]}</button>
        <button className='buttonSubmitChanges3' type="submit" onClick={openTeam2}>{infoForTwoTeam[1]}</button>
        <button className='buttonSubmitChanges3' type="submit" onClick={openDetailsCommand}>Деталі команд</button>
        </div>
        <div>
            <div className="infoForm">
            
                <div className="textB">Команди учасники: {infoForOneTeam[1]}, {infoForTwoTeam[1]}</div>
                <div className="textB">Назва події: {info["name"]}</div>
              
                <div className="textB">Місце Проведення: {info["place"]}</div>
                <div className="textB">Кількість раундів: {info["gameMap"][3]}</div>
                
                <div className="usersCard"><b className="textDescription">Деталі події: <b className="textGetData">{info["detailsr"]}</b></b></div>
                <div className="usersCard">
               
                   <div>
                   <img className='imgo' src = {info["gameMap"][1]}></img>
                   </div>
                   <div><b className="textGetData">Карта проведення події: {info["gameMap"][0]}</b></div>
                   <div>
                   <img className='imgo' src = {info["gameMap"][2]}></img>
                   </div>
                   
                </div>
                <div className="usersCardDown">
                    <li className="textB">Статистика гравців по вбивствам</li>
                {info["gamers"].map(function(elements){
           
            const sty = {
                width: `${elements.wins*mm[0]}px`,
                height: `30px`,
                backgroundColor: 'blue',
            };
return(
    <div className="formForStats">
    <b className="stForST">{elements.name}</b><nobr>
    <div style={sty}></div></nobr>
</div>
);})
}
                </div>
                <div className="usersCardDown">
                    <li className="textB">Статистика гравців по смертям</li>
                {info["gamers"].map(function(elements){
           
            const sty = {
                width: `${elements.wins*mm[1]}px`,
                height: `30px`,
                backgroundColor: 'red',
            };
return(
    <div className="formForStats">
    <b className="stForST">{elements.name}</b><nobr>
    <div style={sty}></div></nobr>
</div>
);})
}
                </div>
      </div> 
      
      </div> 
      
      </div> 
      
        );
      }
      return(
        <div>
       {type === 1?<div className="formMain10">
            <b className="textName">Назва події: {info["name"]}</b>
           <button  className="buttonsb" onClick={goToMainPage}><img src="data:image/png;base64,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" width="20" height="20"/></button>
<button  className="buttonsba" onClick={startRestr}>Зареєструватись на подію</button>

        </div>: null}        <div className="buttondiv2">
        <button className='buttonSubmitChanges3' type="submit" onClick={openTeam1}>{infoForOneTeam[1]}</button>
        <button className='buttonSubmitChanges3' type="submit" onClick={openTeam2}>{infoForTwoTeam[1]}</button>
        <button className='buttonSubmitChanges3' type="submit" onClick={openDetailsCommand}>Деталі команд</button>
        </div>
        <div>
            <div className="infoForm">
                
                <div className="textBox">
                    <p className="textC">Команда: {openModals}</p>
               <p className="textC">Рейтинг команди: <nobr className="textForNumbers">{infoForOneTeam[1] === openModals?((Number(infoForOneTeam[2])+Number(infoForOneTeam[3])+Number(infoForOneTeam[4]))/infoForOneTeam[2]).toFixed(2):((Number(infoForTwoTeam[2])+Number(infoForTwoTeam[3])+Number(infoForTwoTeam[4]))/infoForTwoTeam[2]).toFixed(2)}</nobr>  Bиграші: <nobr className="textForNumbers">{infoForOneTeam[1] === openModals?infoForOneTeam[2]:infoForTwoTeam[2]}</nobr>  Програші: <nobr className="textForNumbers">{infoForOneTeam[1] === openModals?infoForOneTeam[3]:infoForTwoTeam[3]}</nobr>  Нічийні партії: <nobr className="textForNumbers">{infoForOneTeam[1] === openModals?infoForOneTeam[4]:infoForTwoTeam[4]}</nobr></p>
      <p className="textC">Гравців в команді <nobr className="textForNumbers">{count}</nobr></p>
       </div> {info["gamers"].map(function(elements){
           if(elements.team === openModals){
            
return(
<div className="usersCard" >
<div ><img className='imgo' src = {elements.image}></img>
</div>

    <div>
    <li className="textDescription" >Gamer name</li>
    <li className="textGetDatanew">{elements.name}</li>
    <li className="textDescription">Team where gamer play</li>
    <li className="textGetDatanew" >{elements.team}</li>
    <li className="textDescription">More datails about this gamer</li>
    <li className="textGetDatanew">{elements.details}</li>
    </div>
</div>
);
}})
}
</div>
        </div>
      </div>);
}}