import React from "react";
import "./butthonSubmit.css";
export const ButtonSubmit = ({isSend,doSend}) => {
    if(isSend == true){
        return <button className="button4" onClick={() => doSend()}>send</button>;
    }
    return <button className="button4" onClick={() => doSend()}>OK</button>;
};