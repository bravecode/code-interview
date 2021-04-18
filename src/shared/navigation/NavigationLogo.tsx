import React from 'react';
import logo from '../../assets/images/logo.svg';

const NavigationLogo: React.FC = () => {
    return (
        <div className="navigation-logo">
            <div className="navigation-logo__icon">
                <img src={logo} alt="Bravecode Logo - Lion" />
            </div>
            <div className="navigation-logo__content">
                <div>
                    Krzysztof Szymański
                </div>
                <div>
                    Technical Interview
                </div>
            </div>
        </div>
    );
}

export { NavigationLogo }