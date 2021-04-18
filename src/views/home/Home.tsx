import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className="page-home">
            
            <section className="improvements">
                <header className="improvements-header">
                    <h2 className="improvements-header__title">
                        Notes:
                    </h2>
                </header>
                <ul className="improvements-list">
                    <li className="improvements-list__item">
                        React Router is overkill for this application. I have used it to add a home page where I can list improvements that can be made to this application.
                    </li>
                </ul>
            </section>

            <section className="improvements">
                <header className="improvements-header">
                    <h2 className="improvements-header__title">
                        Improvements:
                    </h2>
                </header>
                <ul className="improvements-list">
                    <li className="improvements-list__item">
                        Current styles do not have a scope and it's easy for naming conflict. Either we continue with the current approach and configure GULP to keep all scss files inside /assets/scss folder or use a library like css-modules / styles-components to have scoped styles (preferred way). React Router is overkill for this application. I have used it to add a home page where I can list improvements that can be made to this application.
                    </li>
                    <li className="improvements-list__item">
                        More Tests. For example, our mapper is assuming a happy path for the API result. If we get different data than expected from the API then the application will crash.
                    </li>
                    <li className="improvements-list__item">
                        "Loading..." text could be replaced with some fancy animation (UX).
                    </li>
                </ul>
            </section>
        </div>
    );
}

export { Home }