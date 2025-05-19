import "./RightContent.css";

export const SongItems=({id,name,image,file,desc,duration})=>{
    return(
      <div className="albumitems">
        <img  className="chartimg" src={image} alt="" />
        <p className="">{name}</p>
        <p className="">{desc}</p>
      </div>

    )
}