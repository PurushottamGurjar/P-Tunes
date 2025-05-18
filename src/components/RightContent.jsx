import React from "react";
import "./RightContent.css";
import { albumsData } from "../assets/myAssets";
import {AlbumItem} from "./AlbumItem";
import { songsData } from "../assets/myAssets";

const RightContent = () => {
  return (
    <>
      <div className="wholeRightContent">
        <div className="rightContentHeader">
          <div className="all selected">All</div>
          <div className="all">Music</div>
          <div className="all">Podcast</div>
        </div>
        <h1 className="featured">Featured Charts</h1>
        
        <div className="featuredCharts">
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>


         <h1 className="featured">Todays Biggest hits</h1>
        <div className="featuredCharts">
        {songsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id}
        image={item.image}/>))}
        </div>
    
       
      </div>
    </>
  );
};

export default RightContent;
