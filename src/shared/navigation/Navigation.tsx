import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import logo from '../../assets/images/logo.svg';
import './Navigation.scss';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            
            <div className="navigation-logo">
                <img src={logo} alt="Bravecode Logo - Lion" />
            </div>

            <NavigationMenu />

        </nav>
    );
}

export { Navigation }