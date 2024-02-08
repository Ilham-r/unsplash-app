import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './collectionphotos.css'
import Image from '../../componants/image'
import { getFormattedCollectionPhotosData } from '../../Server/services';
const CollectionPhotos = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const collectionid = location?.state?.collectionid;
    const title=location?.state?.title;
    const totals = location?.state?.totals;
    const handleClick = (item) => {
      const dataList = [item.full,item.created_at, item.alt_description,  item.name,item.collectionInfo,item.small,item.download,item.results,item.id];
      navigate(`/imagedtail/${item.id}`, { state: { dataList } });
    };
    useEffect(() => {
      const fetchResults = async () => {
   
        const response = await getFormattedCollectionPhotosData(collectionid)
      
        setResults(response);
      
       
      };
  
      if (collectionid) {
        fetchResults();
      }
    }, );
  return (
   <div className="collectionphotos__container">
     <h1>{title}</h1>
     <p>{totals} photos</p>
       <div className="collectionphotos__wrapper">
           
    {results?.map(item=>(
      <div className='image__wrp' onClick={() => handleClick(item)}>
      <Image key={item.id}image={item.full} alt={item.alt_description} />
      </div>
    ))}
       </div>
   </div>
  )
}

export default CollectionPhotos