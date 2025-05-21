import React from "react";
import "./player.css";
import { assets } from "../assets/myAssets";
import { useState } from "react";
import { songsData } from "../assets/myAssets";

const Player = () => {
 const [seekValue, setSeekValue]=useState();

 const handleSeekUpdate=(event)=>{
    setSeekValue(event.target.value)
 }

  const songdata = songsData[0];
  return (
    <>
      <div className="playercontainer">
        <div className="playerFirst">
          <img src={songdata.image} alt="" className="songIconImg" />
          <div className="playerText">
            <div className="playerTextFirst">{songdata.name}</div>
            <div className="playerTextSecond">{songdata.desc.slice(0, 20)}</div>
          </div>
        </div>
        <div className="playerSecond">
          <div className="playerSecondIcons">
            <img src={assets.shuffle_icon} alt="" className="playerIcons" />
            <img src={assets.prev_icon} alt="" className="playerIcons" />
            <img src={assets.pause_icon} alt="" className="playerIcons" />
            <img src={assets.next_icon} alt="" className="playerIcons" />
            <img src={assets.loop_icon} alt="" className="playerIcons" />
          </div>
          <div className="playerSecondSeekBar">
            <div className="playerCurrentTime">1:30</div>
            <input type="range" className="seek" min="0" max="100" value={seekValue}  onChange={handleSeekUpdate}/>
            <div className="playerTotalTime">5:50</div>
          </div>
        </div>
        <div className="playerThird">
          <div className="thirdIcons">
            <img src={assets.plays_icon} alt="" className="thirdEachIcon" />
            <img src={assets.mic_icon} alt="" className="thirdEachIcon" />
            <img src={assets.queue_icon} alt="" className="thirdEachIcon" />
            <img src={assets.speaker_icon} alt="" className="thirdEachIcon" />
            <img src={assets.volume_icon} alt="" className="thirdEachIcon" />
            <img src={assets.mini_player} alt="" className="thirdEachIcon" />
            <img src={assets.zoom_icon} alt="" className="thirdEachIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
