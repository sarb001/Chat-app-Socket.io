import React from 'react';
import './Home.css';

export const Home = () => {

  return (
    <div>  
        <div className = "home-container">
                <div className = "main">
                    <input  type = "email" placeholder='Enter your email....' />
                    <input  type = "text" placeholder='Enter your Room id ....' />
                        <button>  Enter  Room  </button>
                    </div>
        </div>
    </div>
  )
}

export default Home