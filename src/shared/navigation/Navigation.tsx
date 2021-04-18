import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import './Navigation.scss';
import { NavigationLogo } from './NavigationLogo';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            
            <NavigationLogo />

            <NavigationMenu />

        </nav>
    );
}

export { Navigation }