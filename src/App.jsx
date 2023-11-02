import { Routes, Route, Link } from "react-router-dom";
/*import logo from './logo.svg';
import css from './App.module.css';
import { ChatTable } from './components/chatTable/chatTable';
import modalWindow from './components/modalWindowInput/modalWindw';
import {InterfaceTable}  from './components/InputBotton/InputBotton';
import { render } from '@testing-library/react';
import { chatTable } from './chat_data';
import { ButtonSubmit } from './components/ButtonSubmit/butthonSubmit';
import { useState , useRef} from 'react';*/
import {Register} from './components/register/register';
import { Login } from './components/login/login';
import {Chat} from './components/chat/chat';
import { useState } from "react";
import axios from "axios";
//export var open = false;
export function onDelete(id){



}

function App() {
  const[usersData,setUsersData]=useState('nothing');
    async function getmas(){
        try{
      const a = await axios.get("http://localhost:3000/userData");
    setUsersData(a.data);
    }
    catch{
      console.error("Невдалось завантажити сторінку. Можливо у вас відсутнє підключення до інтернету");
      return;
    }}
    console.log(usersData);
    if(usersData==="nothing"){
      getmas();
    }
  //let i = prompt("тип 1 або 2 aбо 3");
  //if(i === '1'){
    const[user,setUser]=useState(
    JSON.parse(window.localStorage.getItem('user')) ?? []
    );
    const changeUser=()=>{
       alert("gnbbbcb");
      return setUser(JSON.parse(window.localStorage.getItem('user')));
       
      
       
    };

  return(
     <p>
    <p>Hello {user}</p>  
  
    <Link to="/chat">go to chat</Link>
    <Link to="/register">register</Link>
    <Link to="/login">login</Link>
     <Routes>
        <Route path="/chat" element={<Chat user={user} />} />
        <Route path="/login" element={<Login usersData={usersData} func={changeUser}/>} />
        <Route path="/register" element={<Register usersData = {usersData} func = {getmas}/>} />
      </Routes>
  </p>
  
  
  );
  }
 /* else{
    if(i === '2'){
    return(
      <p>
       
   <Register/>
  
    
   </p>
   
   
   );}
  
  else{
    return(
      <p>
       
   <Login/>
  
    
   </p>
   
   
   );
  }
  }}
//export default  { deleteChange};*/
export default App;
//export const useMyContext = () => useContext(deleteChange);