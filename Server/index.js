const express = require('express');
const bodyparser = require('body-parser');
const { Server } = require('socket.io');

const io = new Server({
    cors : true,
});
const app = express();

app.use(bodyparser.json());
const emailtosocketmapping = new  Map();

io.on('connection' , (socket) => {
    socket.on('join-room' ,data => {                                // send a msg to client 
        const { emailid , roomid } = data;                           // get this data from Server 
        console.log('User' ,emailid , 'Joined Room' , roomid);
        emailtosocketmapping.set(emailid, socket.id);                // set email id for mapping specific user 
        socket.join(roomid);                                        // tell socket to join 
        socket.broadcast.to(roomid).emit('user-joined' , {emailid});        // show other user in already present room
    });
})

app.listen(8000 , () => {
    console.log(`Http Server port runningdc  on 8000  on... `); })
io.listen(8001);