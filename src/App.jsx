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

const App = () => {
  const navigateHome = useNavigate();
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
              <div className="all" onClick={() => navigateHome("/album/0")}>
                Favorites
              </div>

              <div className="all" onClick={() => navigateHome("/")}>
                All
              </div>
              <div className="all" onClick={() => navigateHome("/album/4")}>
                Music
              </div>
              <div className="all" onClick={() => navigateHome("/album/2")}>
                Podcast
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
