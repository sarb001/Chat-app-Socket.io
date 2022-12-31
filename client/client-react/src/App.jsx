import React from 'react';

import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import { PeerProvider } from './Providers/Peer';
import { SocketProvider } from './Providers/Socket';
import Room from './Room'; 

function App() {
 
  return (
    <>
          <div className="main">
              
        <SocketProvider>
            <PeerProvider>
              <Routes>
                  <Route exact path = "/" element = {<Home />}>  </Route>
                  <Route exact path = "/room/:roomid" element = {<Room />}>  </Route>
              </Routes>
            </PeerProvider>
        </SocketProvider>
          </div>
    </>
       )
}

export default App
