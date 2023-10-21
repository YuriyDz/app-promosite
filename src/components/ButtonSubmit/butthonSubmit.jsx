import React from "react";
export const ButtonSubmit = ({isSend,doSend}) => {
    if(isSend == true){
        return <button onClick={() => doSend()}>send</button>;
    }
    return <button onClick={() => doSend()}>OK</button>;
};