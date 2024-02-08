import React, { useState, useEffect } from 'react';
import './collections.css';
import { getFormattedCollectionsdata } from '../../Server/services';
import { useNavigate } from 'react-router-dom';
const Collections = () => {
  const [results, setResults] = useState([]);


  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await getFormattedCollectionsdata();
        const resultsArray = Array.isArray(response) ? response : [response];

        setResults(resultsArray);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchResults();
  }, []);
  const navigate= useNavigate();
  const handleClick=(result)=>{
   const collectionid=result.id;
   const title = result.title;
   const totals=result.total_photos;
   navigate(`/collections/photos/${result.id}`,{state:{collectionid,title,totals}});
  }
  return (
    <div className='collections__container'>
      <h1>Collections</h1>
      <p>Explore the world through collections of beautiful photos free to use under the <span> Unsplash License</span>.</p>
      <div className="collections__list">
        {results?.map(result => (
          <div className="collection__wrap" onClick={() =>handleClick(result)} >
            <div className="collection__wrap-image">
              <img src={result.covers[0]} alt="collection background" />
              <div className="small">
                <img src={result.covers[1]} alt="" />
                <img src={result.covers[2]} alt="" />
              </div>
            </div>
            <div className="collection__wrap-details">
              <p>{result.title}</p>
              <p>{result.total_photos}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
