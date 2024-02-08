import React from 'react'
import './imagedetails.css'
import { useLocation } from 'react-router-dom';
import {DownloadForOfflineOutlined} from '@mui/icons-material';
import CollectionBar from '../../componants/collectionBar'
import { saveAs } from 'file-saver';
const ImageDetails = () => {
  const location = useLocation();
  const dataList = location?.state?.dataList || [];
  const handleDownload = () => {
    saveAs(dataList[6],'image.jpg')
  };

 
  return (
 <div className="imagedetails__container">

  <img className="imagedetails__container-image"src={dataList[0]} alt={dataList[2]} />
    <div className="image__desc">
      <div className="image__desc-author">
      <img src={dataList[5]} alt='author'/>
      <p>{dataList[3]}</p>
      </div>
      <p className="image__desc-publishing">
        {dataList[1]}
      </p>
      <div className="image__desc-buttons">
        <div onClick={handleDownload}> <DownloadForOfflineOutlined/>Download</div>
      </div>



      <div className="image__desc-collections">
        
        <p className='title'>Collections</p>
       
         {dataList[4].map(collection=>(
          
             <CollectionBar title={collection.title} image={collection.cover} />
         ))}
      
      
      </div>
      

     
    </div>
 </div>
  )
}

export default ImageDetails