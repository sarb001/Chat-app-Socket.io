
import React  , { useState ,useEffect } from 'react';
import './Home.css';
import { useSocket } from './Providers/Socket';

export const Home = () => {
    
    const { socket } = useSocket();
    socket.emit('join-room' , { roomid : '5' , emailid  : 'ajaydev@gmail.com' });

  return (
    <div>  
        <div className = "home-container">
                <div className = "main">
                        <input  type = "email"     onChange = {(e) => setEmail(e.target.value)}
                         placeholder = 'Enter your email....'  />
                        <input  type = "text"     onChange = {(e) => setRoomid(e.target.value)}
                         placeholder = 'Enter your Room id ....' />
                        <button >  Enter  Room  </button>
                </div>
        </div>
    </div>
  )
}

export default Home