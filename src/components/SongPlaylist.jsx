import React from "react";
import "./songPlaylist.css";
import { useParams } from "react-router-dom";
import { assets } from "../assets/myAssets";
import { albumsData } from "../assets/myAssets";
import { songsData } from "../assets/myAssets";

const SongPlaylist = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  // const { playWithId } = useContext(PlayerContext);

  return (
    <div className="display-album">
      <div className="album-header">
        <img className="album-image" src={albumData.image} alt="" />
        <div className="album-info">
          <p className="playlist-label">Playlist</p>
          <h2 className="album-title">{albumData.name}</h2>
          <h4 className="album-desc">{albumData.desc}</h4>
          <p className="album-meta">
            <img className="spotify-logo" src={assets.spotify_logo} alt="" />
            <b> Spotify </b>
            <b>• 1,232,123 saves </b>
            • <b>50 songs,</b>
            <span className="album-duration"> about 2hr 30 min</span>
          </p>
        </div>
      </div>

      <div className="song-grid-header">
        <p><b className="song-index-header">#</b>Title</p>
        <p>Album</p>
        <p className="date-added-header">Date Added</p>
        <img className="clock-icon" src={assets.clock_icon} alt="" />
      </div>
      <hr />

      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={item.id}
          className="song-row"
        >
          <div className="song-title">
            <b className="song-index">{index + 1}</b>
            <img className="song-image" src={item.image} alt={item.name} />
            <div className="song-details">
              <div>{item.name.slice(0, 20)}</div>
              <div className="song-desc">{item.desc.slice(0, 20)}</div>
            </div>
          </div>
          <p className="album-name">{albumData.name}</p>
          <p className="date-added">2 days ago</p>
          <p className="song-duration">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default SongPlaylist;
