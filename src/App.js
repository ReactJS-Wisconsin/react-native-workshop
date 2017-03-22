import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.callbackMenu = this.callbackMenu.bind(this);
    this.state = {
      showMenu: false
    };
  }

  callbackMenu() {
    this.setState({
      showMenu: true
    });
  }

  render() {
    const {showMenu} = this.state;
    return (
      <div className="app">
        <Menu isMenuOpen={showMenu}/>
        <Header callbackMenu={this.callbackMenu}/>
        <div className="app__container">
        <a className="app__source-link" title="Source" href="http://gufsky.com/" target="_blank" rel="noopener">
          <img className="app__source" alt="Source" src="http://gufsky.com/gufsky_logo.png" />
        </a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
