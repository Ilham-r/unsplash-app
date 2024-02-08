import React, {useState} from 'react'
import './homepage.css'
import SearchingBar from '../../componants/searchbar';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const [text, setText] = useState('');
  const navigate= useNavigate();

  const handleSearch = () => {
    navigate(`/results/${text}`);
  };
  return (
   <div className="homepage__container">
 <h1>Search</h1>
 <p>Search high-resolution images from Unsplash</p>
<SearchingBar handlechange={(event) => setText(event.target.value)} text={text} SubmitSearch={handleSearch}  />

   </div>
  )
}

export default Homepage