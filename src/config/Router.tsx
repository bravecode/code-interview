import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/scss/global.scss';

// Templates
import { DefaultTemplate } from '../templates/default/DefaultTemplate';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DefaultTemplate} />
            </Switch>
        </BrowserRouter>
    );
}

export { Router }