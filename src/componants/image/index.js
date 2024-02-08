import React from 'react'
import './image.css'
const Image = ({index,image,alt}) => {
  return (
    <div className='image__wrapper'>
<img key={index}src={image} alt={alt}  />
    </div>
  )
}

export default Image