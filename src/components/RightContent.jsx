import React from "react";
import "./RightContent.css";
import { albumsData } from "../assets/myAssets";
import {AlbumItem} from "./AlbumItem";
import { SongItems } from "./SongItems";
import { songsData } from "../assets/myAssets";

const RightContent = () => {
  return (
    <>
      <div className="wholeRightContent">
        <h1 className="featured">Featured Charts</h1>
        
        <div className="featuredCharts">
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>


         <h1 className="featured">Todays Biggest hits</h1>
        <div className="featuredCharts">
        {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>
    
       
      </div>
    </>
  );
};

export default RightContent;
