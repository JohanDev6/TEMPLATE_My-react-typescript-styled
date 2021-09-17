import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App'
import NotFound from './pages/notfound'
import Home from './pages/home'

const Routes = () : ReactElement => {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/home' component={Home} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        </Router>
    )
};

export default Routes;  
