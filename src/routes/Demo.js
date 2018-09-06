import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Demo extends Component {
    render() {
        return (
            <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                <div className="ui-block">
                    <h1>Demo</h1>
                </div>
            </main>
        );
    }
}

export default withRouter(Demo);