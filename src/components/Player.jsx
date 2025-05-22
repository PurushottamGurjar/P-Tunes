import React from "react";
import "./player.css";
import { assets } from "../assets/myAssets";
import { useContext } from "react";
import { MyContext } from "../contexts/ContextPlayer";
import { useRef } from "react";

const Player = () => {
  const {
    isPlaying,
    setIsPlaying,
    seekValue,
    setSeekValue,
    handleSeekUpdate,
    songTrack,
    setSongTrack,
    audioRef,
    play,
    pause,
    prev,
    next,
    playWithId,
    time,
    setTime,
  } = useContext(MyContext);

  return (
    <>
      <div className="playercontainer">
        <div className="playerFirst">
          <img src={songTrack.image} alt="" className="songIconImg" />
          <div className="playerText">
            <div className="playerTextFirst">{songTrack.name.slice(0, 30)}</div>
            <div className="playerTextSecond">
              {songTrack.desc.slice(0, 30)}
            </div>
          </div>
        </div>
        <div className="playerSecond">
          <div className="playerSecondIcons">
            <img src={assets.shuffle_icon} alt="" className="playerIcons" />
            <img
              src={assets.prev_icon}
              alt=""
              className="playerIcons"
              onClick={prev}
            />

            {isPlaying ? (
              <img
                src={assets.pause_icon}
                alt=""
                className="playerIcons"
                onClick={pause}
              />
            ) : (
              <img
                src={assets.play_icon}
                alt=""
                className="playerIcons"
                onClick={play}
              />
            )}

            <img
              src={assets.next_icon}
              alt=""
              className="playerIcons"
              onClick={next}
            />
            <img src={assets.loop_icon} alt="" className="playerIcons" />
          </div>
          <div className="playerSecondSeekBar">
            <div className="playerCurrentTime">
              {time.currentTime.minutes}:
              {time.currentTime.seconds.toString().padStart(2, "0")}
            </div>

            <input
              type="range"
              className="seek"
              min="0"
              max="100"
              value={seekValue}
              onChange={handleSeekUpdate}
            />

            <div className="playerTotalTime">
              {time.totalTime.minutes}:
              {time.totalTime.seconds.toString().padStart(2, "0")}
            </div>

            <audio ref={audioRef} src={songTrack.file}></audio>
          </div>
          <div className="curentSongName">{songTrack.name.slice(0,20)}</div>
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
