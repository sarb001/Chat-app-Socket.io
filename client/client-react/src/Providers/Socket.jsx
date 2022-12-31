import React from 'react';
import { useContext , createContext } from 'react';
import { useMemo } from 'react';
import { io } from 'socket.io-client';

   export  const SocketContext = React.createContext(null);            // Context created 

 export const SocketProvider = (props) => {
    const socket = useMemo(() => io('http://localhost:8001'),[]); 

    return(
            <SocketContext.Provider value = {{socket}} > 
                 {props.children}
            </SocketContext.Provider>
    )
}

export const useSocket = () => {                               // using all Context 
    return useContext(SocketContext)
}

