const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const io = new Server({
    cors : true,
});
const app = express();

app.use(bodyParser.json());

const emailtosocketmapping = new  Map();
const socketToEmailPassing = new  Map();

io.on('connection' , (socket) => {
    console.log(' New Connection adeddd ');
    socket.on('join-room' , (data) => {                                // send a msg to client 
        const { emailid , roomid } = data;                           // get this data from Server 
        console.log('User' ,emailid , 'Joined Rooms' , roomid);
        emailtosocketmapping.set(emailid, socket.id);                // set email id for mapping specific user 
        socket.join(roomid);                                        // tell socket to join 
        socket.emit('Join-Room is ' , {roomid});                      // Event happened  or can day  Server Side for joining room 
        socket.broadcast.to(roomid).emit('user-joined' , {emailid});        // show other user in already present room
    });

    socket.on('call-user' , (data) => {                              // Server is listening to offer that u made 
        const {emailid , offer} = data ;
        const fromEmail = socketToEmailPassing.get(socketid);      
        const socketid = emailtosocketmapping.get(emailid);           // Will get socketid from email to Convert 
        socket.to(socketid).emit('incoming-call' , { from : fromEmail , offer })                       // In Backend 
    });
})

app.listen(8000 , () => {
    console.log(`GU Http Server port running  8000  on... `); }
)

io.listen(8001);