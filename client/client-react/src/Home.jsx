
import React  , { useState ,useEffect } from 'react';
import './Home.css';
import { useSocket } from './Providers/Socket';
import { useNavigate } from 'react-router-dom';
 

export const Home = () => {
    
    const { socket } = useSocket();
    // socket.emit('join-room' ,  { roomid: '232' , emailid : "firstjassi@esx" })

    const [email ,setEmail] = useState();
    const [roomid ,setRoomid] = useState();
    const navigate = useNavigate();

    const handlejoinroom = () => {            // on clicking button get this 
        socket.emit('join-room' ,{ emailid : email , roomid })
    }

    const handleroomjoined = ({roomid}) => {      // frontend for Showing room joined and forward to other page 
      navigate(`/room/${roomid}`);
      //  console.log('Room joined', roomid);
    }

    useEffect(() => {       
       socket.on('joined-room' , handleroomjoined)
    },[socket])
    
  return (
    <div>  
        <div className = "home-container">
                <div className = "main">
                        <input  type = "email"  value = {email}   onChange = {(e) => setEmail(e.target.value)}
                         placeholder = 'Enter your email....'  />
                        <input  type = "text"    value = {roomid}  onChange = {(e) => setRoomid(e.target.value)}
                         placeholder = 'Enter your Room id ....' />
                        <button onClick = {handlejoinroom}>  Enter  Room  </button>
                </div>
        </div>
    </div>
  )
}

export default Home