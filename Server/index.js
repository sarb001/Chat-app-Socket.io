const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

// Backend Side 

const io = new Server({
    cors : true,
});
const app = express();

app.use(bodyParser.json());

const emailtosocketmapping = new  Map();

io.on('connection' , (socket) => {

    console.log(' New Connection ');

    socket.on('join-room' , (data) => {
        const { roomid , emailid } = data ;
        console.log('User' , emailid , 'Joined Room' ,roomid );
        emailtosocketmapping.set(emailid ,socket.id);
        socket.join(roomid);
                             // on Backend  side - Joined me in this Room  ( Below )
        socket.emit('joined-room' , {roomid});          
        socket.broadcast.to(roomid).emit('user-joined' , { emailid });
    });
})


app.listen(8000 , () => {
    console.log(`GU Http Server port running on 8000  on... `); }
)

io.listen(8001);