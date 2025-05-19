import "./RightContent.css";

export const SongItems=({id,name,image,file,desc,duration})=>{
    return(
      <div className="albumitems">
        <img  className="chartimg" src={image} alt="" />
        <p className="albumitemtextname">{name}</p>
        <p className="albumitemtextdesc">{desc}</p>
      </div>

    )
}