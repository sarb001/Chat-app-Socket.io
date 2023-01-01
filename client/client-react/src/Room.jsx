import React from 'react';
import { useEffect } from 'react';
import { useSocket } from './Providers/Socket';

// This Page will open when clicked on Enter Room Button 

const Room = () => {
  const {socket} = useSocket();

  // Show me the Email id at New page  whichever new User Joined 
  const handleuserjoined = (data) => {
        const {emailid} = data;
        console.log('New User Joined Room' , emailid);
 };

 // First time this Effect will run means above handle Function 
 useEffect(() => {
        socket.on('user-joined' , handleuserjoined);
 },[socket]);

    return(
            <div className = "main-container">
                    <h1> Room page  </h1>
            </div>
    )
}

export default Room 