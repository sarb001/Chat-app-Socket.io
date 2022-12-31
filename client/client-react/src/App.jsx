import React from 'react';

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Home';
import { SocketProvider } from './Providers/Socket';

function App() {
 
  return (
    <BrowserRouter>
        <SocketProvider>
          <div className="App">
                <div className="main">
                  <Routes>
                    <Route exact path = "/" element = {<Home />}>  </Route>
                  </Routes>
                </div>
          </div>
       </SocketProvider>
    </BrowserRouter>
  )
}

export default App
