import React from 'react';
import logoPath from '../images/logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logoPath} alt="Логотип сайта Место" className="header__logo" />
        </header>
    )
}

export default Header;