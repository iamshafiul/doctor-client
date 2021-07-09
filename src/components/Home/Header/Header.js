import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Bussinessinfo from '../Bussinessinfo/Bussinessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-container"> 
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
            <Bussinessinfo></Bussinessinfo>
        </div>
    );
};

export default Header;