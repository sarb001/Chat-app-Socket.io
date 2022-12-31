import React from 'react';
import './Home.css';
import { useSocket } from './Providers/Socket';

export const Home = () => {
    const { socket } = useSocket();
    socket.emit('join-room' ,  { roomid: '232' ,emailid : "killwebn@ex" })

  return (
    <div>  
        <div className = "home-container">
                <div className = "main">
                    <input  type = "email" placeholder='Enter your email....' />
                    <input  type = "text"  placeholder='Enter your Room id ....' />
                        <button>  Enter  Room  </button>
                    </div>
        </div>
    </div>
  )
}

export default Home