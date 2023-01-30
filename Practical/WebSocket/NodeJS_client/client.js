// Program to create a websocket client
const {WebSocket} = require('ws');

const HOST = "ws://localhost:";
const PORT = "3000";
const PATH = "/aao/gappe/maare";
const ws = new WebSocket(HOST + PORT + PATH);

// Event to handle intial Connection event 
ws.on('open', function open() {
  ws.send('Hello from Nodejs websocket client');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

ws.on('close',(statusCode, reasonbuffer)=>{
    console.log(statusCode+ reasonbuffer)
})