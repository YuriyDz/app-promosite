import { usersData } from "../../users";
import { measeges_for_user } from "../../users";
import { useState} from 'react';
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
export const Login=({usersData,func})=> {
   console.log(typeof(func));
   //usersData = usersData["usersData"];
   const navigate = useNavigate();
  //  const[hidePassword,setHidePassword]=useState(true);
    const[userNameEmail,setUserNameEmail]=useState('');
    console.log(usersData);
    const[password,setPassword]=useState('');
   
    const[a,setA]=useState(measeges_for_user[0]);
    const[b,setB]=useState(measeges_for_user[8]);
   
   /*  const hide = () =>{
        let b = true;
        if(hidePassword==true){
            b = false;
        }
        setHidePassword(b);
     };
     const returnPassword=(p)=>{
        let pn = "";
          for(let i=0;i<p.lenth;i++){
                    pn = pn + "●";             

          }
          return pn;
     };*/
   /* const handleEmailChange = (event) => {
        setEmail(event.form.valuea);jhhjhjhjhj
        setUserNamea(event.form.value);
        setPasword(event.form.valueb);
        setCorrectPasword(event.form.valuec);
        
    };*/
   
    const handleUserChange = (event) => {
        setUserNameEmail(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
     
     function correct(){
       
      
            if(userNameEmail===''){
                setA(`${measeges_for_user[0]} ${measeges_for_user[6]}`);
               }
           
            if(password === ''){
                setB(`${measeges_for_user[8]} ${measeges_for_user[6]}`);
            }
       
       
           
           let u=correctName(userNameEmail);
           let p=correctPasword(password);
           
      
        if('uncorrect' === u){
                setA("Такого нік-нейма нема");
                setUserNameEmail('');
                u = '';
        }
        if('uncorrect' === p){
                setB(measeges_for_user[5]);
                setPassword('');
                p = '';
        }
        let confimereg = 0;
        
            if(u){
                setA('✅');
                confimereg = confimereg +1;
             }
           if(p){
               
                setB('✅');
                confimereg = confimereg +1;
           }
           
       if(confimereg == 2){
        window.localStorage.setItem('user', JSON.stringify(u));
            alert("Вхід виконаний успішно");
            func();
            
            navigate("/", { replace: true });
       }
     }
     function correctName (u){
        if(u === '') return '';
        let b = true;
            /* for(let i in usersData){
                 if(i === u || usersData[i][0] === u){
                    b = false;
                    break;
                 }
             }
             if(b == false){
                return u;
             }
             else{
                return 'uncorrect';
             }*/
             for(let i in usersData){
                if(usersData[i]["name"]===u || usersData[i]["email"]===u){
                    b=false;
                    break;
                }
             }
             if(b == false){
                return u;
             }
             else{
                return 'uncorrect';
             }
        
     }
     function correctPasword(p){
        if(p === '') return '';
        let b = true;
        for(let i in usersData){
            if(usersData[i]["password"]===p){
                b=false;
                break;
            }
         }
             
             if(b == false){
                return p;
             }
             else{
                return 'uncorrect';
             }
     }




     
    
return(
   
    <div  className='box'>
       <p>{a}</p> 
    <label>
        
    <input className={a === `${measeges_for_user[0]} ${measeges_for_user[6]}`?'redLable':'whiteLable'}  type="userNamea" value={userNameEmail} onChange={handleUserChange} />
</label>
<p>{b}</p>
<label>
        
    <input className={b === `${measeges_for_user[8]} ${measeges_for_user[6]}`?'redLable':'whiteLable'} type="email" value={password} onChange={handlePasswordChange}/>
</label>

    <p></p>
<button className='button1' onClick={correct} onSubmit={()=>func()}>Підтвердити вхід</button>
</div>
);
};
//hidePassword == false?password:returnPassword(password)
//<button className="buttonHide" onClick={hide} ></button>