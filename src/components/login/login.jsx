import { renderHook } from "@testing-library/react";
import { usersData } from "../../users";
import { measeges_for_user} from '../../users';
import { useState} from 'react';
import "./login.css";
export function Login() {
    const[userNameEmail,setUserNameEmail]=useState('');
   
    const[password,setPassword]=useState('');
   
    const[a,setA]=useState(measeges_for_user[0]);
    const[b,setB]=useState(measeges_for_user[8]);
   
     
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
            
            alert("Вхід виконаний успішно");
       }
     }
     function correctName (u){
        if(u === '') return '';
        let b = true;
             for(let i in usersData){
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
             }
     }
     function correctPasword(p){
        if(p === '') return '';
        let b = true;
             for(let i in usersData){
                 if(usersData[i][1] === p){
                    b = false;
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
<button className='button1' onClick={correct}>Підтвердити вхід</button>
</div>
);
}