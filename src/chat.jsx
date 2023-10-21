import logo from './logo.svg';
import css from './App.module.css';
import { ChatTable } from './components/chatTable/chatTable';
import modalWindow from './components/modalWindowInput/modalWindw';
import {InterfaceTable}  from './components/InputBotton/InputBotton';
import { chatTable } from './chat_data';
import { ButtonSubmit } from './components/ButtonSubmit/butthonSubmit';
import { useState , useRef} from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
function Chat() {
    const[chatData,setChatData] = useState(chatTable);
    const[modalOpen,setModalOpen] = useState(false);
    const[cid,setCid]=useState(-1);
    const[chatText,setChatText]=useState('')
    const[send,setSend]=useState(true);
    const[isOwner,setIsOwner]=useState(false);
    const[user,setUser]=useState("quest");
    OverlayScrollbars ( {  
      target : document . querySelector ( '#target' ) , 
      scrollbars : { 
        slot : document . querySelector ( '#chatTable' ) . parentElement , 
      } , 
     } ,  { } ) ;
    //Модальне вікно з пітвердженням
    //___|___потребує вдосконалення___|___
    //   V                            V   
      const openModal = () => {
        setModalOpen(true);
      };
      
      const closeModal = () =>{
    setModalOpen(false);
    
      };
      //___X___END___X___
      const idSelect = (id) => {
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
      
        const doSend = () => {
          const pushMas=[user,chatText];
               if(send == false){
                  setChatData(chatData.map(value => {
                      if(value == chatData[cid]){
                        return pushMas;
                      }
                        return value;
                  }),);
               }
               else{
                setChatData([...chatData, pushMas]);
                setChatText('');
               }
        };
        const handleEmailChange = (event) => {
            setChatText(event.target.value);
        };
        console.log(modalOpen);
    return (
      <div className={css.App}>
         <modalWindow open={modalOpen} close={closeModal}></modalWindow>
         <box className={css.form}>
               <ButtonSubmit isSend={send} doSend={doSend}></ButtonSubmit> 
               <label>
                    <input className ='textLable.css' type="chatText" value={chatText} onChange={handleEmailChange} />
               </label>
               
               <InterfaceTable id = {cid} func = {deleteChange} userOwner={isOwner}></InterfaceTable>
               <iframe src = "OverlayScrollbars" style="width:100%;height:100vh">
               <ChatTable  userOwner = {user} cid = {cid} func = {idSelect} chatTable={chatData}></ChatTable>
               </iframe>
         </box>
      </div>
    );
}
export default Chat;