import "./RightContent.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../contexts/ContextPlayer";


export const AlbumItem = ({image,name,desc,id}) => {
  const {category, setCategory}=useContext(MyContext)
  const navigate=useNavigate();

  return (
    <div  className="albumitems" onClick={()=>{
      navigate(`/album/${id-1}`)
      setCategory("Playlist")
      }}>
        <img className="chartimg" src={image} alt="image" />
        <p className="albumitemtextname">{name.slice(0,20)}</p>
        <p className="albumitemtextdesc">{desc.slice(0,20)}</p>
    </div>
  )
};
