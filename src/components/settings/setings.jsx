/*import React, { useState } from 'react';
import { usersData, measeges_for_user} from '../../users';
import "./regiater.css";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const UserSettingsPage = () => {
  /*const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отримання та відправка даних на сервер або збереження їх в локальному сховищі
  };

  return (
    <div>
      <h1>User Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

const navigate = useNavigate(usersData);
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
     
 };

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
*/
    import './settings.css';
    import React, { useState } from 'react';
    import { useNavigate } from "react-router-dom";
    import axios from "axios";
    export function UserSettingsPage({updateUD,func,funcC,userData,user}) {
      let mask = [];
      const navigate = useNavigate();
      for(let i in userData[user]){
         console.log(userData[user][i],i,typeof(i));
         mask.push(userData[user][i]);
       }
        
      
      //alert(user["name"]);
      //const[user1,setUser]=useState({});
      const [name, setName] = useState('John Doe');
      const [email, setEmail] = useState('john.doe@example.com');
      const [password, setPassword] = useState('');
      const [withdrawalAmount, setWithdrawalAmount] = useState('');
      const [birthdate, setBirthdate] = useState('');
      const [address, setAddress] = useState('');
      const [phone, setPhone] = useState('');
      const [language, setLanguage] = useState('en');
      const [correctPassword, setCorrectPassword] = useState('');
      const [messageOfMistakes,setMessageOfMistakes]= useState([]);
let user1 = userData[user];
      console.log(userData[user]);
     
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const handleCorrectPasswordChange = (e) => {
        setCorrectPassword(e.target.value);
      };
    
      const handleWithdrawalSubmit = (e) => {
        e.preventDefault();
        let obj = {
          "id": user1["id"],
          "name": user1["name"],
          "email": user1["email"],
          "password": user1["password"],
          "mass of ticket": user1['mass of ticket'],
          "phone": user1["phone"],
          "adres": user1["adres"],
          "bd": user1["bd"],
          "money": String(Number(user1["money"])+Number(withdrawalAmount))  
        }
      funcC(obj,user1["id"]);
      alert("Знято "+withdrawalAmount+"$");
         setWithdrawalAmount('');
        
        // Отримання та обробка суми для відводу грошей
      };
    
      const handleAccountDeletion = () => {
         let submitPassword = prompt("Ви дійсно хочете видалити свій аккаунт, якщо так то введіть свій пароль");
         if(submitPassword === user1['password']){
          axios.delete("http://localhost:3000/userData/"+String(user1['id']));
          updateUD();
          return handleOutWithAccount();
         }
         return;
           // Логіка для видалення акаунта
      };
      const handleOutWithAccount = () => {
        window.localStorage.setItem('userid', JSON.stringify(-1));
        window.localStorage.setItem('user', JSON.stringify("quest"));
        func();
        navigate("/", { replace: true });

      };
    
      const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
      };
    
      const handleAddressChange = (e) => {
        setAddress(e.target.value);
      };
      const handleWithdrawalAmount = (e) => {
        setWithdrawalAmount(e.target.value);
      };
    
      const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };
    
      const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Отримання та відправка даних на сервер або збереження їх в локальному сховищі
      };
      function setDefaultName(){
        setName(user1['name']);
      }
      function setDefaultEmail(){
        setEmail(user1['email']);
      }
      function setDefaultPasword(){
        setPassword(user1['password']);
        setCorrectPassword(user1['password']);
      }
      function setDefaultBirthday(){
        setBirthdate(user1['bd']);
      }
      function setDefaultAdress(){
        setAddress(user1['adres']);
      }
      function setDefaultPhone(){
        setPhone(user1['phone']);
      }
      function submitCorrectChange(){
       // setUserPiece(n);
       let a=name;
       let b=email;
       let c=password;
       if(name !== user1['name']){
           a =isCorrectName(name);
       }
       if(email !== user1['email']){
           b =correctEmail(email);
       }
       if(password !== user1['password']){
           c =ucorrectPassword(password,correctPassword);
       }
          let message = [];
          let mas=[];
          if(name !== user1["name"]){
             mas.push(name);
          }
          if(email !== user1["email"])
          {
            mas.push(email);
          }
          if(password !== user1["password"] && correctPassword !== user1["password"])
          {
            mas.push(password);
          }
          if(phone !== user1["phone"]){
            mas.push(phone);
          }
          if(address !== user1["adres"]){
            mas.push(address);
          }
          if(birthdate !== user1["bd"])
          {
            mas.push(birthdate);
          }
          for(let i of mas){
            i.replace(" ","");
             if(i === ''){
              message.push("Заповніть пусті поля");
              break;
             }
          }
          //if(name === ''||email ===''|| password === ''|| correctPassword===''||phone===''||address===''||birthdate===''){
            //
          
          if(a === 'uncorrect'){
                message.push("Такий нік-нейм вже існує придумайте інший");
                setName('');
          }
          if(b === 'uncorrect'){
            message.push("Введіть справжню електронну пошту");
            setEmail('');
      }
      if(c === 'uncorrect'){
        message.push("Неправильний пароль");
        setCorrectPassword('');
  }
  setMessageOfMistakes(message);
  if(message.length == 0){

    let obj = {
      "id": user1["id"],
      "name": name,
      "email": email,
      "password": password,
      "mass of ticket": user1['mass of ticket'],
      "phone": phone,
      "adres": address,
      "bd": birthdate,
      "money": user1['money']  
    }
  funcC(obj,user1["id"]);

  }

      }
      function isCorrectName(n){
            for(let i of userData){
                 if(i['name']===n )return 'uncorrect';
            }
            return n;
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
            function ucorrectPassword(p,ap){
                  if(p===ap)return p;
                  return 'uncorrect';
            }
    
  //for(let i in userData[user]){
   // console.log(user1[i],i,typeof(i));
  //}
  let a = [];
  for(let j in mask[4]){
   /// console.log(a[j]+"  "+j);
    a.push(mask[4][j]);
  }
  //console.log(mask[4]);
  const backToMainPage=()=>{
    navigate("/", { replace: true });
  }
  console.log(mask[7]+" "+birthdate);
      return (
        <div>
            <div className='formMain'><b className='textuser'>Welcome {mask[1]}</b><button className='buttonsb' onClick={backToMainPage}>Back to main page</button><b className='textmoney'>{mask[8]}$</b></div>
          <form onSubmit={handleSubmit} className='Settingtables'>
           <div className='formMain1'>
           <div className='divPiece'>
            <b className='textUserSettings'>Name:</b>
            <div>
                
              <label htmlFor="name"></label>
              <input
              className={(name === mask[1])?'tableDefault':'table'} 
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                />
                <button className='buttonD' onClick={setDefaultName}>Default</button>
            </div>
            <b className='textUserSettings'>Email:</b>
            <div>
            <nobr className='textLabletext'></nobr>
              <label htmlFor="email">  </label>
              <input
              className={(email === mask[2])?'tableDefault':'table'} 
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className='buttonD' onClick={setDefaultEmail}>Default</button>
            </div>
            <b className='textUserSettings'>Password:</b>
            <div>
              <label htmlFor="password"></label>
              <input
              className={(password === mask[3])?'tableDefault':'table'} 
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                />
                <button className='buttonD' onClick={setDefaultPasword}>Default</button>
             </div>
             <b className='textUserSettings'>Correct password:</b>
              <div>
              <label htmlFor="password"></label>
              <input
              className={(password === mask[3])?'tableDefault':'table'} 
                type="password"
                id="correctPassword"
                value={correctPassword}
                onChange={handleCorrectPasswordChange}
                />
             </div>
             <b className='textUserSettings'>Birthdate:</b>
            <div>
              <label htmlFor="birthdate"></label>
              <input
              className={(birthdate === mask[7])?'tableDefault':'table'} 
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={handleBirthdateChange}
              />
              <button className='buttonD' onClick={setDefaultBirthday}>Default</button>
            </div>
            <b className='textUserSettings'>Home address:</b>
            <div>
              <label htmlFor="address"></label>
              <input
              className={(address === mask[6])?'tableDefault':'table'} 
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
              />
              <button className='buttonD' onClick={setDefaultAdress}>Default</button>
            </div>
            <b className='textUserSettings'>Phone:</b>
            <div>
             
              <label htmlFor="phone"></label>
              <input
              className={(phone === mask[5])?'tableDefault':'table'} 
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
              <button className='buttonD' onClick={setDefaultPhone}>Default</button>
            </div>
            </div>
            <div className='divPiece'>
             
                
                <div>
                  <b className={messageOfMistakes.length === 0?'textCorrectChange':'texterrors'}>{messageOfMistakes.length === 0?'Нема помилок ✅':'Помилки:'}</b>
                    {messageOfMistakes.map(function(i){
                             return<p className='texterrors'>{i}</p>;
                        })
                    }
                </div>
                </div>
                </div>
                <div className='buttondiv'>
            <button className='buttonSubmitChanges' type="submit" onClick={submitCorrectChange}><img src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/right-file-icon.svg" width="25px" height="25px"/></button>
            <button className='buttonSubmitChanges' type="button" onClick={handleOutWithAccount}><img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/door-check-out-icon.svg" width="25px" height="25px"/></button>
            <button className='buttonSubmitChanges' type="button" onClick={handleAccountDeletion}><img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/recycle-bin-line-icon.svg" width="25px" height="25px"/></button>
            </div>
            <div>
              <p></p>
                    {
                  
                    a.map(function(item){
                      return(<div className='ticket'>                                    
                       
                      <li className='ticketText'>Ticket for:</li>
                        <b className='ticketText'>{item}</b>
                      
                      </div>
                    );})
                    }
                </div>
            <div>
                <label htmlFor="language">Language:</label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="uk">Ukrainian</option>
                </select>
                <div>
              <label className='table' htmlFor="withdrawal"><b className='textUserSettings'>Correct password:</b></label>
              <input
                 type="text"
                 id="withdrawal"
                value={withdrawalAmount}
                onChange={handleWithdrawalAmount}
               />
               <button type="button" className='buttonD' onClick={handleWithdrawalSubmit}>Withdraw</button>
            </div>
            <div className='buttondiv'>
            
            </div>
            </div>
            
          </form>
        </div>
        
      );
    }

//export default UserSettingsPage;
