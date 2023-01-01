
import React  , { useState ,useEffect } from 'react';
import './Home.css';
import { useSocket } from './Providers/Socket';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    
    const { socket } = useSocket();

    const [email ,setEmail] = useState();
    const [roomid ,setRoomid] = useState();
    const navigate = useNavigate();

    // Get and Shift Roomid to other Component
    const handleroomjoined = ({roomid}) => {
      navigate(`/room/${roomid}`);
    };

    useEffect(() => {
      socket.on('joined-room' ,handleroomjoined )
    },[socket])


    // Get Email  & Roomid 
    const handlejoinroom = () => {      
      socket.emit('join-room' , {emailid :email , roomid});
  };

  return (
    <div>  
        <div className = "home-container">
                <div className = "main">
                        <input  type = "email"   value = {email}  onChange = {(e) => setEmail(e.target.value)}
                         placeholder = 'Enter your email....'  />
                        <input  type = "text"    value = {roomid}   onChange = {(e) => setRoomid(e.target.value)}
                         placeholder = 'Enter your Room id ....' />
                        <button onClick = {handlejoinroom} >  Enter  Room  </button>
                </div>
        </div>
    </div>
  )
}

export default Home