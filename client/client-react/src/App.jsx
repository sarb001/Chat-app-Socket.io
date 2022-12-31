import React from 'react';

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Home';

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
          <div className="main">
            <Routes>
               <Route exact path = "/" element = {<Home />}>  </Route>
            </Routes>
          </div>
    </div>
    </BrowserRouter>
  )
}

export default App
