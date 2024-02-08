import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./resaultpage.css";
import SearchingBar from '../../componants/searchbar'; 
import Image from '../../componants/image';
import getFormattedPhotosData from '../../Server/services';

const ResaultPage = () => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query); // State to manage search query
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const [text, setText] = useState(query);
    const handleClick = (item) => {
        const dataList = [item.full, item.created_at, item.alt_description, item.name, item.collectionInfo, item.small, item.download, item.results, item.id];
        navigate(`/imagedtail/${item.id}`, { state: { dataList } });
    };

    useEffect(() => {
        const fetchResults = async () => {
            const response = await getFormattedPhotosData(searchQuery); 
            setResults(response);
        };

        if (searchQuery) {
            fetchResults();
        }
    }, [searchQuery]); 

    const handleSearch = () => {
        setSearchQuery(text);
    };

    return (
        <div className='resault__container'>
            <SearchingBar handlechange={(event) => setText(event.target.value)} text={text} SubmitSearch={handleSearch} />
            <div className="resault__container-images_wrapper">
                {results?.map(item => (
                    <div className='image__wrp' onClick={() => handleClick(item)} key={item.id}>
                        <Image image={item.full} alt={item.alt_description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResaultPage;
