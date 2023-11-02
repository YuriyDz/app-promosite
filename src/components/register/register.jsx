import { useState} from 'react';
import { usersData, measeges_for_user} from '../../users';
import "./regiater.css";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//✅
 export function Register({usersData,func}) {
    console.log(usersData);
    const navigate = useNavigate();
   // usersData=usersData["usersData"];
    const[userNamea,setUserNamea]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[correctPasword,setCorrectPasword]=useState('');
    const[a,setA]=useState(measeges_for_user[0]);
    const[b,setB]=useState(measeges_for_user[1]);
   const[dm,setDm]= useState(measeges_for_user[8]);
    const[c,setC]=useState(measeges_for_user[2]);
   
     
   /* const handleEmailChange = (event) => {
        setEmail(event.form.valuea);jhhjhjhjhj
        setUserNamea(event.form.value);
        setPasword(event.form.valueb);
        setCorrectPasword(event.form.valuec);
        
    };*/
   
    const handleUserChange = (event) => {
        setUserNamea(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handleCorrectPasswordChange = (event) => {
        setCorrectPasword(event.target.value);
      };
     function correct(){
       
       if(email===''){
                setB(`${measeges_for_user[1]} ${measeges_for_user[6]}`);
       }
            if(userNamea===''){
                setA(`${measeges_for_user[0]} ${measeges_for_user[6]}`);
               }
            if(correctPasword===''){
                setC(`${measeges_for_user[2]} ${measeges_for_user[6]}`);
            }
            if(password === ''){
                setDm(`${measeges_for_user[8]} ${measeges_for_user[6]}`);
            }
        console.log(c);
        console.log("1",email,"2",userNamea,"3",password,"4",correctPasword);
           let e=correctEmail(email);
           let u=correctName(userNamea);
           let p=password;
           let pc = correctAgainPassword(correctPasword,password);
        if('uncorrect' === e){
            
                setB(measeges_for_user[4]);
                setEmail('');
                e = '';
        }
        if('uncorrect' === u){
                setA(measeges_for_user[3]);
                setUserNamea('');
                u = '';
        }
        if('uncorrect' === pc){
                setC(measeges_for_user[5]);
                setCorrectPasword('');
                pc = '';
        }
        let confimereg = 0;
        
            if(e){
                setB('✅');
                confimereg = confimereg +1;
            }
            if(u){
                setA('✅');
                confimereg = confimereg +1;
            }
           if(pc){
                setC('✅');
                confimereg = confimereg +1;
           }
          
           if(p){
               
                setDm('✅');
                confimereg = confimereg +1;
           }
           console.log(dm);
       if(confimereg == 4){
           // usersData[userNamea] = [email,password];
            const mas = {
              "id":usersData[usersData.length-1]["id"]+1,
              "name": userNamea,
              "email": email,
              "password": password

            }
            console.log(mas);
             axios.post("http://localhost:3000/userData",mas);
            alert("Реєстрація пройшла успішно");
            func();
            navigate("/login", { replace: true });
       }
     }
     function correctAgainPassword(p,pc){
        if(pc === '' || p === '') return '';
        if(p === pc){
            return pc;
        }
        else{
            return 'uncorrect';
        }

     }
     function correctName (u){
        if(u === '') return '';
        let b = true;
             for(let i of usersData){
                console.log(i);
                 if(i["name"] === u){
                    b = false;
                    break;
                 }
             }
             if(b == true){
                return u;
             }
             else{
                return 'uncorrect';
             }
     }
     function correctEmail (u){
        if(u === '') return '';
              let b = false;
              for(let i in u){
                 if(u[i]=='@' && i != 0 && i != u.length-1){
                    if(b == false){
                        b = true;
                    }
                    else{
                        b = false;
                        break;
                    }
              
                 
                }}
            if(b == true){
                return  u;
            }    
            else return 'uncorrect';
            
            }
    
    
return(
   
    <div  className='box'>
       <p>{a}</p> 
    <label>
        
    <input className={a === `${measeges_for_user[0]} ${measeges_for_user[6]}`?'redLable':'whiteLable'}  type="userNamea" value={userNamea} onChange={handleUserChange} />
</label>
<p>{b}</p>
<label>
        
    <input className={b === `${measeges_for_user[1]} ${measeges_for_user[6]}`?'redLable':'whiteLable'} type="email" value={email} onChange={handleEmailChange}/>
</label>
<p>{dm}</p>
<label>
     
    <input className={dm === `${measeges_for_user[8]} ${measeges_for_user[6]}`?'redLable':'whiteLable'}type="curent-password" value={password} onChange={handlePasswordChange}/>

    </label>
    <p>{c}</p>
    <label>
    
    <input className = {c === `${measeges_for_user[2]} ${measeges_for_user[6]}`?'redLable':'whiteLable'} type="correctPasword" value={correctPasword} onChange={handleCorrectPasswordChange}/>

    </label>
    <p></p>
<button className='button1' onClick={correct}>Підтвердити реєстрацію</button>
</div>
);
}
//export default Register;
