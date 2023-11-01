import { Routes, Route } from "react-router-dom";
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
//export var open = false;
export function onDelete(id){



}

function App() {
  //let i = prompt("тип 1 або 2 aбо 3");
  //if(i === '1'){
  return(
     <p>
      
     <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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