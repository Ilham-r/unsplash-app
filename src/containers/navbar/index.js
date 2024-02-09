import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(true);
    const navigate = useNavigate();

    const handleButtonClick = (route) => {
        setActive(route === 'Home'); 
        if(route === 'Home'){
            navigate(`/`);
        }else{
        navigate(`/${route}`);}
    };

    return (
        <div className='navbar__container'>
            <img src={logo} alt="" className="logo" />
            <div className="navbar__menu">
                <div className={`button ${active ? 'active' : ''}`} onClick={() => handleButtonClick('Home')}>Home</div>
                <div className={`button ${!active ? 'active' : ''}`} onClick={() => handleButtonClick('Collections')}>Collections</div>
            </div>
        </div>
    );
};

export default Navbar;
