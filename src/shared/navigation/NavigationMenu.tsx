import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
    return (
        <ul className="navigation-menu">
            <li className="navigation-menu__item navigation-item">
                <NavLink exact to="/" className="navigation-item__anchor" activeClassName="--active">
                    Home
                </NavLink>
            </li>
            <li className="navigation-menu__item navigation-item">
                <NavLink to="/users" className="navigation-item__anchor" activeClassName="--active">
                    Users
                </NavLink>
            </li>
        </ul>
    );
}

export { NavigationMenu }