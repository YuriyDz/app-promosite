import { useState, useRef, useEffect } from "react";
import axios from "axios";
import io from 'socket.io-client';
import './pageWithVideo.css';
import { Chat } from "../chat/chat";
//import { Socket } from "dgram";
export function PageVideo({user,chatId,eventId}){
  //const localVideoRef = useRef(null);
 // const remoteVideoRef = useRef(null);
    eventId = JSON.parse(window.localStorage.getItem('eventid')) ?? [];
    const[buttonPush,setButtonPush]=useState(-1);
    const[info,setInfo]= useState(['nothing']);
    //const[socket]= useState(()=>io('http://localhost:3002'));
    /*const pc = useRef(new RTCPeerConnection(null));
    useEffect(()=>{



    });*/
async function getmas(){
    try{
  const a = await axios.get("http://localhost:3000/Events/"+String(eventId));
  console.log(a.data);
setInfo(a.data);
}
catch{
  console.error("Невдалось завантажити сторінку. Можливо у вас відсутнє підключення до інтернету");
  return;
}}
if(info[0]==="nothing"){
    getmas();
  }
  const outChat = () =>{
      if(buttonPush == 2){
             setButtonPush(-1);
      }
      else{
        setButtonPush(2);
      }
  }
  const outDetails = () =>{
    if(buttonPush == 1){
        setButtonPush(-1);
 }
 else{
   setButtonPush(1);
 }
  }/*
  const createVideo = async ()=>{
     const call = await pc.curent.createVideo();
     await pc.curent.setLocalDescription(call);
     socket.emit('call',call);


  }*/
  //<video ref = {localVideoRef}>autoPlay Mute</video>
  console.log(info["gamers"]);
  let mas = info["gamers"];
    if(buttonPush == 1){
return(<div>
 
    <div className="divForBottons">
    <button className="buttonVP" onClick={outChat}>To chat</button>
        <button className="buttonVP" onClick={outDetails}>To datails</button>
        </div>
    <div className="bg">
{info["gamers"].map(function(elements){
return(
<div className="box_with_gamers">
<div className="image"><img src = {elements.image}></img>
<li className="userText">{elements.name}</li></div>

    <div>
    <li className="ct1">Gamer name</li>
    <li className="ct">{elements.name}</li>
    <li className="ct1">Team where gamer play</li>
    <li className="ct">{elements.team}</li>
    <li className="ct1">ore datails about this gamer</li>
    <li className="ct">{elements.details}</li>
    </div>
</div>

);
})
}
<p></p>
</div>
</div>);
       

    }
    else{
    if(buttonPush == 2){
        return(<div><div className="divForBottons">
          <button className="buttonVP" onClick={outChat}>To chat</button>
        <button className="buttonVP" onClick={outDetails}>To datails</button>
        </div>
        <div className="chatbg">
        <Chat user={user} chatId={chatId} />
        </div>
        </div>
        );
    }
else{
    return(<div className="divForBottons">
        <button className="buttonVP" onClick={outChat}>To chat</button>
        <button className="buttonVP" onClick={outDetails}>To datails</button>
    </div>);

}
    }

}