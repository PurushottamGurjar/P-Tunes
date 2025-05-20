import React from 'react'
import "./player.css"
import { songsData } from '../assets/myAssets'

const Player = () => {
    const songdata=songsData[0];
  return (
    <>
    <div className="playercontainer">
        <div className="playerFirst">
            <img src={songdata.image} alt="" className="songIconImg" />
            <div className="playerText">
                <div className="playerTextFirst">{songdata.name}</div>
                <div className="playerTextSecond">{songdata.desc.slice(0,20)}</div>
            </div>
        </div>
        <div className="playerSecond"></div>
        <div className="playerThird"></div>
    </div>
      
    </>
  )
}

export default Player;
