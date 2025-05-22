import "./RightContent.css";
import { MyContext } from "../contexts/ContextPlayer";
import { useContext } from "react";

export const SongItems=({id,name,image,file,desc,duration})=>{
    const {playWithId} =useContext(MyContext)
    return(
      <div className="albumitems" onClick={()=>{playWithId(id)}}>
        <img  className="chartimg" src={image} alt="" />
        <p className="albumitemtextname">{name.slice(0,25)}</p>
        <p className="albumitemtextdesc">{desc.slice(0,25)}</p>
      </div>

    )
}