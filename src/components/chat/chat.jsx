//import logo from './logo.svg';
import { addusers } from '../scripts/addUsers';
import './chattt.css';
import { ChatTable } from '../chatTable/chatTable';
//import modalWindow from '../modalWindowInput/modalWindw';
import {InterfaceTable}  from '../InputBotton/InputBotton';
import { chatTable } from '../../chat_data';
import { ButtonSubmit } from '../ButtonSubmit/butthonSubmit';
import { useState} from 'react';
import axios from "axios";
import { json } from 'react-router-dom';
//axios.defaults.baseURL = "http://localhost:3000";
//import { OverlayScrollbars } from 'overlayscrollbars';
export function Chat() {

    const[chatData,setChatData] = useState(["nothing"]);
    const url="http://localhost:3000/chatTable";
  async function getmas(){
    try{
  const a =await axios.get(url);
setChatData(a.data);
}
catch{
  return;
}}
console.log(chatData[0]);
if(chatData[0]==="nothing"){
  getmas();
}
   // const[modalOpen,setModalOpen] = useState(false);
    const[cid,setCid]=useState(-1);
    const[chatText,setChatText]=useState('');
    const[send,setSend]=useState(true);
    const[isOwner,setIsOwner]=useState(false);
    const[chatPiece,setChatPiece]= useState(0);
    let user = "quest";
    let range = 4;

  /*  OverlayScrollbars ( {  
      target : document . querySelector ( '#target' ) , 
      scrollbars : { 
        slot : document . querySelector ( '#chatTable' ) . parentElement , 
      } , 
     } ,  { } ) ;*/
    //Модальне вікно з пітвердженням
    //___|___потребує вдосконалення___|___
    //   V                            V   
     
      //___X___END___X___
      const idSelect = (id) => {
        id = id + chatPiece;
        console.log(id,chatPiece,cid);
        if(id == cid){
          setCid(-1);
          setSend(true);
        if(send == false){
          setChatText('');
            }
        }
        else{
            setCid(id);
            }
        if(chatData[id][0] == user && id != -1){
          setIsOwner(true);
        }
        else{
          setSend(true);
          setIsOwner(false);
        }
      };
      const deleteChange = (type) => {
    switch(type){
        case 1:
           setSend(false);
           break;
        case 2:
           setChatData(chatData.filter(value => value !== chatData[cid]),);
           if(cid > chatData.length-(range+1)){
            setChatPiece(chatPiece-1);
           }
           if(cid < range){
            setChatPiece(0);
           }
           setCid(-1);  
           break;
        case 3:
           setCid(-1);
           setChatText('');
           setSend(true);
           break;    
        case 4:
           setChatText(chatData[cid][1]);
           break;
        }
    
    };
    
    function sendData(){
      addusers(chatData);
    };
      
        const doSend = () => {
          const pushMas=[user,chatText];
               if(send == false){
                  setChatData(chatData.map(value => {
                      if(value == chatData[cid]){
                        return pushMas;
                      }
                        return value;
                  }),);
                  setSend(true);
               }
               else{
                
                setChatData([...chatData, pushMas]);
                toBotton(1);
                
               }
               setChatText(''); 
        };
        const handleEmailChange = (event) => {
            setChatText(event.target.value);
        };
       // console.log(modalOpen);
       function peice(){
          let newChat = [];
 if(chatData.length < range){
  return chatData;
  
 }
 else{
  newChat = chatData.slice(chatPiece,chatPiece+4);
  return newChat;
 }
       }
       
      function minusData(n){
        if(chatPiece+n > chatData.length - range || chatPiece+n < 0){
          return;          
        }
            setChatPiece(chatPiece+n);
          //  setCid(-1);
      }
      function toBotton(n){

        
          if(chatData.length > range-1){
        setChatPiece(chatData.length -range+n);
      }}
    return (
      <box>              
               <InterfaceTable  id = {cid} func = {deleteChange} userOwner={isOwner}></InterfaceTable>
               <box className='conteiner'>
               <ChatTable userOwner = {user} cid = {cid-chatPiece} func = {idSelect} chatTable={peice()} funcSeve={sendData}></ChatTable>
               </box>
               
               <box className='form1'>
               <ButtonSubmit isSend={send} doSend={doSend} ></ButtonSubmit> 
               <label>
                
               
                <input className ='textLable' type="chatText" value={chatText} onChange={handleEmailChange} />
                
               </label>
               <button className='button-slap' onClick={() => minusData(-1)}>^</button>
                <button className='button-slap' onClick={() => minusData(1)}>v</button>
                <button className='button-slap' onClick={() => toBotton(0)}>vv</button>
                
               </box>
        
      </box>
    );
}
//
//export default Chat;
/*
 <button onClick={plusSlap(slapRange)}>^</button>
              <button onClick={plusSlap(-slapRange)}>v</button>
              {slapRange}
              <button onClick={setSlapRange(slapRange+1)}>^</button>
              <button onClick={setSlapRange(slapRange-1)}>v</button>
               <button onClick={setSlapIndex(slapIndex+1)}></button>
               <button onClick={setSlapIndex(slapIndex-1)}></button>
              */