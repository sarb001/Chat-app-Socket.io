import React from 'react';
import { useEffect } from 'react';
import { useSocket } from './Providers/Socket'

const Room = () => {

    const { socket } = useSocket();
 
    const handleuserjoined = (data) => {
        const { emailid } = data ;
        console.log('New user Joined is ------' , emailid);
    }

      useEffect(() => {
        socket.on('user-joined' , handleuserjoined)
      },[socket])  

  return (
    <div>
         <h1>   This is the Main Room </h1> 
    </div>
  )
}

export default Room