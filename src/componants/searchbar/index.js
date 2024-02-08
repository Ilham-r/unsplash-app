import React from 'react'
import './searching.css'
import search from '../../assets/Search.svg'
const SearchingBar = ({text,handlechange,SubmitSearch}) => {
  return (
    <div className="searching-input">
    <input type="text" placeholder='Enter ur Keywords...'  value={text} onChange={handlechange}/>
    <img src={search} alt="search" onClick={SubmitSearch}  />
    </div>
   
  )
}

export default SearchingBar