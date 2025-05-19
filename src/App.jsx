import React from "react";
import "./app.css";
import HeaderLogoBar from "./components/HeaderLogoBar";
import LeftSideBar from "./components/leftSideBar";
import RightContent from "./components/RightContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongPlaylist from "./components/SongPlaylist";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigateHome=useNavigate();
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
              <div className="all selected" onClick={()=>navigateHome('/')} >All </div>
              <div className="all" onClick={()=>navigateHome('/top')}>Music</div>
              <div className="all" onClick={()=>navigateHome('/top')}>Podcast</div>
            </div>

            <Routes>
              <Route path="/" element={<RightContent />} />
              <Route path="/album/0" element={<SongPlaylist />} />
              <Route path="/song" element={<SongPlaylist />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
