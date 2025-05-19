import "./RightContent.css";
import { useNavigate } from "react-router-dom";


export const AlbumItem = ({image,name,desc,id}) => {
  const navigate=useNavigate();

  return (
    <div  className="albumitems" onClick={()=>{navigate(`/${name}`)}}>
        <img className="chartimg" src={image} alt="image" />
        <p className="albumitemtextname">{name}</p>
        <p className="albumitemtextdesc">{desc}</p>
    </div>
  )
};
