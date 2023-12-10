//const { Socket } = require("socket.io-client");
const {WebSocketServer} = require("ws");
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

const ws = new WebSocketServer({port: 8080});
ws.on("connection", (socket)=>{
       //console.log("fuck");
       
}
);
console.log("Server startin ggg");

ws.on("listening",(socket)=>{
console.log("usee aaaa");

});
