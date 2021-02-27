import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Notfound from './pages/Notfound';



class Approute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/News" component={News} /> 
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/privacy" component={Privacy} /> 
                    <Route exact path="/terms" component={Terms} />   
                    <Route component={Notfound} />  
                </Switch>
            </>
        );
    }
}

export default Approute;