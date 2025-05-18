import React from 'react'
import "./HeaderLogoBar.css"
import { assets } from '../assets/myAssets'

const HeaderLogoBar = () => {
  return (
    <>
        <div className="header">
          <div className="tunebuttons">
            <div className="left">
            <img src={assets.spotify_logo} alt="Ptunes" />
            <h1 className='ptunes'>P-Tunes </h1>
          </div>
          <div className="right">
            <button>Install App</button>
            <button>Login</button>
          </div>
          </div>
          <div className="middle">
            <input type="text" placeholder='Search Your song' />
            <img className="search" src={assets.search_icon} alt="" />
          </div>
          
            
        </div>
      
    </>
  )
}

export default HeaderLogoBar;
