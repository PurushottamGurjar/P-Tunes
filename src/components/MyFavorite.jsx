import React from 'react'
import { songsData } from '../assets/myAssets'
import { useContext } from 'react'
import { MyContext } from '../contexts/ContextPlayer'
import { albumsData } from '../assets/myAssets'

const MyFavorite = () => {
    const {playWithId}=useContext(MyContext)
    const albumData=albumsData[0];
  return (
    <>
     {songsData.map((item, index) => (
            <div 
              onClick={() => playWithId(item.id)}
              key={item.id}
              className="song-row ml30"
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
      
    </>
  )
}

export default MyFavorite
