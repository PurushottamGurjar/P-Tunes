import React from "react";
import "./RightContent.css";
import { albumsData, favoriteSongsData, randomSongsData } from "../assets/myAssets";
import { AlbumItem } from "./AlbumItem";
import { SongItems } from "./SongItems";
import { songsData } from "../assets/myAssets";

const RightContent = () => {
  
  return (
    <>
      <div className="wholeRightContent">
        <h1 className="featured">My Favorites</h1>
        <div className="featuredCharts">
          {favoriteSongsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>

        <h1 className="featured">Featured Charts</h1>
        <div className="featuredCharts">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>

        <h1 className="featured">Random Songs</h1>
        <div className="featuredCharts">
          {randomSongsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightContent;
