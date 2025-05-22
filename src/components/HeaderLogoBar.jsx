import React from 'react'
import "./HeaderLogoBar.css"
import { assets } from '../assets/myAssets'

const HeaderLogoBar = () => {
  return (
    <>
        <div className="header">
          <div className="headerSecondary">
            <div className="logoTune">
            <div className="imglogo">
              <img className='logoImg'  src={assets.PtuneLogo} alt="" />
            </div>
            <div className="Ptunetext"> P-Tunes</div>
          </div>
          <div className="profielSearch">
            <div className="middle">
            <input type="text" placeholder='Search Artist " Purushottam Gurjar "' className='inputSearchBar'/>
            <img className="search" src={assets.search_icon} alt="" />
            </div>
            <div className="profileIcon">
              <img src={assets.profilePic} alt="" className="profileimg" />
            </div>
          </div>
          </div>
          <div className="middlesecondary">
            <input type="text" placeholder='Search " Purushottam Gurjar "' className='inputSearchBar'/>
            <img className="search" src={assets.search_icon} alt="" />
          </div>
          
            
        </div>
      
    </>
  )
}

export default HeaderLogoBar;
