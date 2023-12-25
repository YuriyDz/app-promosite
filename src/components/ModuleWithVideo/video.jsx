import { useState, useRef } from "react";
import React, { Component } from "react";
import { Player } from 'video-react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'
import "./video.css";
import { getValue } from "@testing-library/user-event/dist/utils";
import { fabClasses } from "@mui/material";

///jjnvcx

export const VideoBlock = ({func, srs}) =>{
  //const srs="";//"https://media.w3.org/2010/05/sintel/trailer.mp4";//"https://www.youtube.com/embed/tmg6d3T_T6Q";//"www.youtube.com/watch?v=IEDEtZ4UVtI";//"https://i.ytimg.com/vi/61r5hHrKu10/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBnZbgZcHNX252YWZ5PIkg3mInfGw";//"";//*/"f";
const[size,setSize]= useState(["1000","500"]);
const[isChange,setIsChange] = useState(0);
const[isPlay,setIsPlay]=useState(false);
const[secounds, setSecounds]= useState(0);
const[buttonPressed,setButtonPressed]=useState(true);
const[hide,setHide]=useState(false);
const[videoDontPlayWithVideoElement,setVideoDontPlayWithVideoElement]=useState(false);
const[videoPover,setVideoPover] = useState(5);
var video = document.getElementById("vid");
var change1 = document.getElementById("ch");
//var videoDontPlayWithVideoElement=false;
/*const hideControls = ()=>{
  change1.hidden;
}*/
// ----volume logic -----
const volumePlus = (e,value) =>{ 
setVideoPover(e.target.value);
if(video != null){
video.volume = videoPover/10;
}};
// ----end----
const fullScreen = () =>{
  if(size[0]==="100%"){
    setSize(["1000","500"]);
  }
  else{
setSize(["100%","100%"]);
  }
  func(size[0]);
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
  if(String(video.duration) === "NaN"){
    setVideoDontPlayWithVideoElement(true);
    return;
  }
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
//----function for hide video controlls with fullscreen viev---
const hideControlsWithFullScreen=(checkout)=>{
  if(checkout === true && hide === true){
    setHide(false);
  }
  if(checkout === false && hide === false){
    setTimeout(()=>setHide(true), 4000);
    
  }
}
//-----end------

//buttonChangeClicked


if(videoDontPlayWithVideoElement === false){
return(
  <div>
    <div className="fullScreen">
    <div className={size[0] === "100%"?"fullcontrols":"boxChange"} id="ch" onMouseEnter={size[0]==="100%"?()=>hideControlsWithFullScreen(true):null} onMouseLeave={size[0]==="100%"?()=>hideControlsWithFullScreen(false):null}>
    {hide === false?(<div className="controlsForVideo"><li className="textsec">{conwertToNormalTime(Math.ceil(Number(secounds)*100)/100)}</li>
    <button onClick={pause} className={buttonPressed === true?"buttonChangeClicked":"buttonChange"}>P</button>
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
     defaultValue={secounds}
    />
     </div>
     
    <div>
    <input
    className="sliderVolume"
    type = "range"
    step = {1}
    max = {10}
    min = {0}
    value={videoPover}
    onChange={volumePlus}
    defaultValue={videoPover}
          />
     </div>
     <button onClick={fullScreen} className="buttonChange">FS</button>
    </div>):null}
    </div>
       
      <video id="vid"  width={size[0]} height={size[1]} >
        <source  src={srs} type="video/mp4"></source>
      </video>
      
   
   
    
    
    </div>
    </div>
    
     );
} 
else{
  return(
    <div className="styleForYoutubeV">
          <iframe width="975"
                        height="487.5"
                        src= {srs}
                        title="Video"
                        allowFullScreen > 
                </iframe> 

         </div> 
  );
}
};
