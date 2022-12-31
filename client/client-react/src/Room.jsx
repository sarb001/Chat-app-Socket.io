import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useSocket } from './Providers/Socket'
import { usePeer } from './Providers/Peer';             

const Room = () => {

    const { socket } = useSocket();
    const { peer , createoffer} = usePeer();            // Imported  from peer 

    const handleuserjoined =  useCallback(async (data) => {
        const { emailid } = data ;
        console.log('New user Joined is ------' , emailid);

        const offer = await createoffer();
        socket.emit('call-user' , {emailid  ,offer });          // Call this user and give the Offer 
    },[createoffer ,socket])


    const handleincomingcall = useCallback((data) =>  {
        const {from , offer } = data ;
        console.log('Incoming Call from ',from ,offer);
    },[]);

    // Now Offer Created and data sent to  backend 

      useEffect(() => {
        socket.on('user-joined' , handleuserjoined)
        socket.on('incoming-call' ,handleincomingcall)
      },[socket ,handleuserjoined])  

  return (
    <div>
         <h1>   This is the Main Room </h1> 
    </div>
  )
}

export default Room