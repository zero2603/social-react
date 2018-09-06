import React, { Component } from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import Demo from './Demo';
import About from './About';
import NewFeeds from './NewFeeds';

class MainApp extends Component {
    render() {
        const { match } = this.props;

		return (
			<Switch>
				<Route exact path={`${match.url}`} component={NewFeeds}/>
				<Route path={`${match.url}demo`} component={Demo}/>
				<Route path={`${match.url}about`} component={About} />
			</Switch>
		);
    }
}

export default withRouter(MainApp);