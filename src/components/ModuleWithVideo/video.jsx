import { useState, useRef } from "react";
import React, { Component } from "react";
import { Player } from 'video-react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'
import "./video.css";
import { getValue } from "@testing-library/user-event/dist/utils";

export const VideoBlock = () =>{
const[size,setSize]= useState(["1000","500"]);
const[isChange,setIsChange] = useState(0);
const[isPlay,setIsPlay]=useState(false);
const[secounds, setSecounds]= useState(0);
const[buttonPressed,setButtonPressed]=useState(true);
const[hide,setHide]=useState(false);
var video = document.getElementById("vid");
var change1 = document.getElementById("ch");
/*const hideControls = ()=>{
  change1.hidden;
}*/
const fullScreen = () =>{
  if(size[0]==="auto"){
    setSize(["1000","500"]);
  }
  else{
setSize(["auto","auto"]);
  }
}
if(isPlay == true){setTimeout(function() {
  if(video.currentTime === video.duration){
    setIsPlay(false);
    setButtonPressed(true);
    video.pause();
  }
  setSecounds(video.currentTime);
  
}, 100);
}
else{
  if(video != null){
  video.currentTime = secounds;
}}
const pause = () =>{
if(isPlay == false){
  setIsChange(video.duration);
  setIsPlay(true);
  setButtonPressed(false);
  video.currentTime = secounds;
  video.play();
}
else{
setIsPlay(false);
setButtonPressed(true);
setSecounds(video.currentTime)
video.pause();
}
}
//Logic change time video ---start---
const videoPlayAggain = ()=>{
  if(video!==null && buttonPressed === false){
setIsPlay(true);
video.play();

}};
const change = (e)=>{
  let t = parseFloat(e.target.value);
setSecounds(t);
video.currentTime = secounds;
  }
const videoStop =()=>{
  if(video!==null){
    setIsPlay(false);
    
    video.pause();}
}
//---finish---
const conwertToNormalTime = (time) => {
let t = "";
if(Math.floor(time/60)!=0){
  console.log((time/60));
  let tm = 0;
  let tn = Math.floor(time/60);
  if(Math.floor(tn/60)!=0){
    tm = Math.floor(tn/60);
    t = t + String(tm) + " " + String(tn) + " " + String(time);
  }
  else{
  t = t  + String(tn) + " " +  String(time);
}}
else{
  return time;
}
return t;
};
return(
  <div  >
    <div>
      <video id="vid"  width={size[0]} height={size[1]} >
        <source src={null} type="video/mp4"></source>
      </video>
      
   
   
    <div className="boxChange" id="ch" >

     <li className="textsec">{conwertToNormalTime(Math.ceil(Number(secounds)*100)/100)}</li>
     <button onClick={pause} className={buttonPressed===true?"buttonChangeClicked":"buttonChange"}>P</button>
     <div id = "s" >
      <input className="sider"
      type="range"
     step={0.1}
     min={0}
    max={isChange}
    value={isPlay === true? secounds: null}
    onChange={change}
    onMouseEnter={videoStop}
    onMouseOutCapture={videoPlayAggain}
      defaultValue={0}
     />
      </div>
     
      <button onClick={fullScreen} className="buttonChange">FS</button>
    </div>
    </div>
    </div>
    
     );
};
