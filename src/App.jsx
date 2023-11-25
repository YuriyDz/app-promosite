import { Routes, Route, Link } from "react-router-dom";
/*import logo from './logo.svg';*/
import {UserSettingsPage} from "./components/settings/setings.jsx";
import './App.module.css';
import { SharedLayout } from "./components/Shayredlayout/shayredlayout.jsx";
/*import { ChatTable } from './components/chatTable/chatTable';
import modalWindow from './components/modalWindowInput/modalWindw';
import {InterfaceTable}  from './components/InputBotton/InputBotton';
import { render } from '@testing-library/react';
import { chatTable } from './chat_data';
import { ButtonSubmit } from './components/ButtonSubmit/butthonSubmit';
import { useState , useRef} from 'react';*/
import {Register} from './components/register/register';
import { Login } from './components/login/login';
import {Chat} from './components/chat/chat';
import { useState, useRef } from "react";
import axios from "axios";
import { Home }  from './components/pages/home';
import { PageVideo } from "./components/pageWithVideo/pageWithVideo.jsx";
import io from 'socket.io-client';
//export var open = false;
export function onDelete(id){



}

function App() {
  const[usersData,setUsersData]=useState('nothing');
  const[id,setId]=useState(-1);
  const[idp,setIdp]=useState(-1);
    async function getmas(){
     // alert("tggggg");
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
    const getId =()=>{
setId(
JSON.parse(window.localStorage.getItem('userid')) ?? []
);
    };
    const[user,setUser]=useState(
    JSON.parse(window.localStorage.getItem('user')) ?? []
    );
    const changeUser=()=>{
      return setUser(JSON.parse(window.localStorage.getItem('user')));
       
      
       
    };
    const getIdp =()=>{
      setIdp(
      JSON.parse(window.localStorage.getItem('eventid')) ?? []
      );
          };
          async function updateUserData(mas,idu){
            alert(idu);
           // console.log('flfdld'+" "+JSON.parse(window.localStorage.getItem('userid')) ?? []);
            console.log(mas);
            await axios.patch("http://localhost:3000/userData/"+String(idu),mas);
            getmas();
         }
  return(
     <p>
     
    
    
     <Routes>
        <Route path="/home" element={<SharedLayout user={user} />}/>
        <Route path="/" element={<Home funcC={updateUserData} funcU={getmas} func={getId} user={user} userTickets={usersData[Number(JSON.parse(window.localStorage.getItem('userid')) ?? [])]} funcp={getIdp}/>} />
        <Route path="/chat" element={<Chat user={user} chatId={id} />} />
        <Route path="/login" element={<Login usersData={usersData} func={changeUser}/>} />
        <Route path="/register" element={<Register usersData = {usersData} func = {getmas}/>} />
        <Route path="/userSettings" element={<UserSettingsPage updateUD={getmas} func={changeUser} funcC={updateUserData} funcU={getmas} userData = {usersData} user={Number(JSON.parse(window.localStorage.getItem('userid')) ?? [])}/>} />
        <Route path="/videoPage" element={<PageVideo user={user} chatId={id} eventId={idp}/>} />
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