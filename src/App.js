import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import _404 from './pages/_404'

// import logo from './assets/icons/logo.svg';
import './App.css';

const logo = '';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={_404}/>
        </Switch>

      </div>
    );
  }
}

export default App;
