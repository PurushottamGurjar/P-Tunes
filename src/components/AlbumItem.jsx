import "./RightContent.css";


export const AlbumItem = ({image,name,desc,id}) => {

  return (
    <div  className="albumitems">
        <img className="chartimg" src={image} alt="image" />
        <p className="albumitemtextname">{name}</p>
        <p className="albumitemtextdesc">{desc}</p>
    </div>
  )
}


export const SongItems=({id,name,image,file,desc,duration})=>{
    return(
      <div className="songitems">
        <img  className="chartimg" src={image} alt="" />
        <p className="">{name}</p>
        <p className="">{desc}</p>
      </div>

    )
}