import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Navigation } from '../../shared/navigation/Navigation';

// Views
import { Home } from '../../views/home/Home';
import { Users } from '../../views/users/Users';

const DefaultTemplate: React.FC = () => {
    return (
        <main className="template">

            <Navigation />

            <div className="template__content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Redirect to="/" />
                </Switch>
            </div>

        </main>
    );
}

export { DefaultTemplate }