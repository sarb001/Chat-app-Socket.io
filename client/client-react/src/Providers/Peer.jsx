import React from 'react';
import { useMemo } from 'react';


// Used to Connect  All RTC  Peer  Connection 


const  PeerContext = React.createContext(null);

export const PeerProvider = (props) => {
  
    const peer = useMemo(() =>  new RTCPeerConnection({
        iceServers : [{
             urls : [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478",
                    ],
                    }]
                    }),[])

     const createoffer = async () => {                  // offer created 
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);          // Offer desc is Stored  
        return offer;
     };     

     return(
        <PeerContext.Provider value = {{peer  , createoffer }} >
            {props.children}
        </PeerContext.Provider>
     )
}

export const usePeer = () => {              // Using All Context 
    return React.useContext(PeerContext);
}