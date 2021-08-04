import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import NotFound from './pages/notfound'
import Mobile from './pages/mobile'

const Routes = () : ReactElement => {

    return (
        <Router>
            <Route exact path='/' component={App} />
            <Route exact path='/mobile' component={Mobile} />
            <Route exact path='*' component={NotFound} />
        </Router>
    )
};  
  
export default Routes;  