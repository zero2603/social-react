import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

class MainApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
        );
    }
}

export default MainApp;