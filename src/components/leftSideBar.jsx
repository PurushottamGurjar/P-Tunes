import React from 'react'
import "./leftSideBar.css"
import { assets } from '../assets/myAssets'

const LeftSideBar = () => {
   
  return (
    <>
        <div className="wholesidebar">
            <div className="first">
                <div  className="homeleftbar">
                    <img className="homesearchlogo" src={assets.home_icon} alt="" />
                    <h2 className='firsttext'>Home</h2>
                </div>
                <div className="homeleftbar">
                    <img className="homesearchlogo" src={assets.search_icon} alt="" />
                    <h2 className='firsttext'>Search</h2>
                </div>
            </div>
            <div className="second">
                <div className="library">
                    <div className="libraryfirst">
                        <img className="homesearchlogo" src={assets.stack_icon} alt="" />
                        <p className="yourlibrary">Your Library</p>
                    </div>
                    <div className="librarysecond">
                        <img  className="homesearchlogo" src={assets.plus_icon} alt="" />
                        <img className="rightarrow" src={assets.arrow_icon} alt="" />
                    </div>

                </div>
                <div className="createplaylist">
                    <h4  className='textheader'>Create your first playlist</h4>
                    <p className='textpara'>it's easy we will help you</p>
                    <button className='playlistbutton'>Create Playlist</button>
                </div>
                <div className="createplaylist">
                    <h4  className='textheader'>Lets find some podcast </h4>
                    <p className='textpara'>Keep updated on new podcast</p>
                    <button className='playlistbutton'>Browse podcast</button>
                </div>
            </div>
            <div className="third"></div>
        </div>
    </>
  )
}

export default LeftSideBar;
