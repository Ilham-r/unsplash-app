import React from 'react'
import './collectionbar.css'
const CollectionBar = ({title,image}) => {
  return (
    <div className="collectionbar__container">
    <img src={image} alt="collection cover" />
    <div className="collectionbar__container_desc">
    <p>{title}</p>
    <p>12 photos</p>
    </div>
      
  </div>
  )
}

export default CollectionBar