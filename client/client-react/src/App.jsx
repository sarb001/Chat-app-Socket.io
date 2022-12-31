import React from 'react';

import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import { SocketProvider } from './Providers/Socket';

function App() {
 
  return (
    <>
          <div className="main">
              <SocketProvider>
                    <Routes>
                      <Route exact path = "/" element = {<Home />}>  </Route>
                      <Route exact path = "/room/:roomid" element = {<h1> Hey , there u rin the Room  </h1>}>  </Route>
                    </Routes>
            </SocketProvider>
          </div>
    </>
       )
}

export default App
