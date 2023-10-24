import { useState} from 'react';
import { usersData, measeges_for_user} from '../../users';
import "./regiater.css";
    

 export function Register() {
    const[userNamea,setUserNamea]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[correctPasword,setCorrectPasword]=useState('');
    const[a,setA]=useState(measeges_for_user[0]);
    const[b,setB]=useState(measeges_for_user[1]);
    const[c,setC]=useState(measeges_for_user[2]);
    const[d,setD]=useState(measeges_for_user[8]);
     
   /* const handleEmailChange = (event) => {
        setEmail(event.form.valuea);jhhjhjhjhj
        setUserNamea(event.form.value);
        setPasword(event.form.valueb);
        setCorrectPasword(event.form.valuec);
        
    };*/
    function correct(){
        if(password && correctPasword){
            correctpasword();
        }
        confimeEmail();
        
        correctUserName();
        correctpasword();
        CorrectRedister();
    }
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
      if(a ===  '✅' && b === '✅' && c === '✅'){
      registe()}
    const confimeEmail=(e)=>{
        let b =false;
        if(email !== ''){      
            let t = email.split('');
            for(let h in t){
                console.log(h);
                if(t[h] === '@'){
                 b = true;
                }
            }
        if(b == false){
            setB(measeges_for_user[4]);
            setEmail('');
        }
        else{
            setB(measeges_for_user[7]);
        } 
    }
    };
    
    const correctUserName=()=>{
        let uc = [];
        console.log(usersData[userNamea],typeof(uc[2]));
        if(String(usersData[userNamea])!==String(typeof(uc[2]))){
           // console.log(textu);
                    setA(measeges_for_user[3]);
                    setUserNamea('');
        }
        else{
            setA(measeges_for_user[7]);
        }
        
        
    };
    const correctpasword = () =>{
            if(password !== correctPasword){
                 setC(measeges_for_user[5]);
                setCorrectPasword('');
            }
            else{
                setC(measeges_for_user[7]);
            }

    };
    function CorrectRedister(){
       let t = true;
      
          switch(''){
             case userNamea:
               
               setA("Заповніть червоні поля");
              t = false;
            case email:
                
                setB("Заповніть червоні поля");
                t= false;
             case password: 
                 
                 setD("Заповніть червоні поля");
                 t = false;
             case correctPasword:
                setC("Заповніть червоні поля");
          }
    }
    function registe(){
       
        
   // alert("Реєстрація пройшла успішно");hhhhhj
     usersData[userNamea] = [email,password];
     setCorrectPasword('');
     setPassword('');
     setEmail('');
     setUserNamea('');
     setA(measeges_for_user[0]);
     setB(measeges_for_user[1]);
     setC(measeges_for_user[2]);
     setD(measeges_for_user[8]);
      }
    
    
return(
   
    <div>
        
    <label>
        {a}
    <input className={a === "Заповніть червоні поля"?'redLable':'whiteLable'}  type="userNamea" value={userNamea} onChange={handleUserChange} />
</label>

<label>
        {b}
    <input className={b === "Заповніть червоні поля"?'redLable':'whiteLable'} type="email" value={email} onChange={handleEmailChange}/>
</label>
<label>
     Ваш пароль
    <input className={d === "Заповніть червоні поля"?'redLable':'whiteLable'}type="curent-password" value={password} onChange={handlePasswordChange}/>

    </label>
    <label>
    {c}
    <input className = {c === "Заповніть червоні поля"?'redLable':'whiteLable'} type="correctPasword" value={correctPasword} onChange={handleCorrectPasswordChange}/>

    </label>
<button onClick={correct}></button>
</div>
);
}
//export default Register;
