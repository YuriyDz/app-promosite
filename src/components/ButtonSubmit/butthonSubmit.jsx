import React from "react";
import "./butthonSubmit.css";
export const ButtonSubmit = ({isSend,doSend}) => {
    if(isSend == true){
        return <button className="button4" onClick={() => doSend()}><img src="https://cdn-icons-png.flaticon.com/512/2099/2099085.png" height="20" width="20"></img></button>;
    }
    return <button className="button4" onClick={() => doSend()}><img src="https://simpleicon.com/wp-content/uploads/ok.png" width="20" height="20"></img></button>;
};
