import React from "react";
import "./app.css";
import HeaderLogoBar from "./components/HeaderLogoBar";
import LeftSideBar from "./components/leftSideBar";
import RightContent from "./components/RightContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongPlaylist from "./components/SongPlaylist";
import { useNavigate } from "react-router-dom";
import Player from "./components/Player";
import MyFavorite from "./components/MyFavorite";
import { useContext } from "react";
import { MyContext } from "./contexts/ContextPlayer";



const App = () => {
  const navigateHome = useNavigate();
  const {category,setCategory}=useContext(MyContext);
  return (
    <div>
      <div className="fullcontent">
        <div className="headerlogobar">
          <HeaderLogoBar />
        </div>

        <div className="body">
          <div className="leftbar">
            <LeftSideBar />
          </div>

          <div className="rightheader">
            <div className="rightContentHeader">

              <div className={`all ${category==="All"? "selected" : "nothing"}`} onClick={() => {
                setCategory("All")
                navigateHome('/')

              }}>
                All
              </div>
               <div className={`all ${category==="Favorites"? "selected": "nothing"}`} 
               onClick={()=>{
                setCategory("Favorites")
                navigateHome('/album/8')
               }}>
                Favorites
              </div>
              <div className={`all ${category==="Music"?"selected":"nothing"}`} 
              onClick={()=>{
                setCategory("Music")
                navigateHome('/favorites')
              }}>
                Music
              </div>
              <div className={`all ${category==="Playlist"? "selected" : "nothing"}`} onClick={() => {
                setCategory("Playlist")
                navigateHome("/album/2")
              }}>
                PlayList
              </div>
            </div>

            <Routes>
              <Route path="/" element={<RightContent />} />
              <Route path="/album/:id" element={<SongPlaylist />} />
              <Route path="/favorites" element={<MyFavorite/>}/>
              <Route path="/song" element={<SongPlaylist />} />
              <Route path="*" element={<RightContent />} />
            </Routes>
          </div>
        </div>
        <Player />
        
      </div>
    </div>
  );
};

export default App;
