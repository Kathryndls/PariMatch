import React from 'react';
import "./index.css";
import magnifyingGlass from"./img/header/magnifying_glass.png";
import filter from"./img/header/filter.png";
import line from"./img/header/line.png";
import calendar from"./img/header/calendar.png";
import notebook from"./img/header/notebook.png";


const Header = ({title}) => {
    const getDataNow = () => {
        let date = new Date(Date.now());   
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        let dateNow = date.toLocaleDateString('en-US', options);
        return dateNow;    
    };

    return (
        <>
        <h1>{title}</h1>
            <div className="header"> 
                <div className="header__wrapper">
                    <h1 className="header__title">Weekly Sprint #4</h1>
                    <button className="header__btn">Sign out</button>
                </div>

                <div className="header__actions">
                    <div className="header__actions_inner">
                        <p className="header__actions_title">Date now</p>
                        <span className="header__actions_date">{getDataNow()}</span>    
                    </div>
                    <div className="header__actions_icons">
                        <img src={magnifyingGlass} alt="magnifying_glass"/>
                        <img src={filter} alt="filter"/>
                        <img className="line" src={line} alt="line"/>
                        <img src={calendar} alt="calendar"/>
                        <img src={notebook} alt="notebook"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
