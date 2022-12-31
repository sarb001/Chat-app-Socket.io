const express = require('express');
const bodyparser = require('body-parser');
const { Server } = require('socket.io');

const io = new Server();
const app = express();

app.use(bodyparser.json());
io.on('connection' , (socket) => {
    socket.emit('emailid' , emailid , 'roomid' , roomid);
    console.log(' Connection Done');
})

app.listen(8000 , () => {
    console.log(`Http Server port runningdc  on 8000  on... `); })
io.listen(8001);