import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import './assets/Bootstrap/dist/css/bootstrap.min.css';
import RightSidebar from './components/RightSidebar';
import MainApp from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
    this.state = {pathname: window.location.pathname};
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.pathname
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="header-spacer"></div>

        <div className="container">
          <div className="row">
            <LeftSidebar></LeftSidebar>
            <MainApp></MainApp>
            <RightSidebar></RightSidebar>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
