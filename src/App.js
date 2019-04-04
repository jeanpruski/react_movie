import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Discover from './components/Discover';
import Popular from './components/Popular';
import MyList from './components/MyList';
import Error from './components/Error';

import './bootstrap.min.css';

class App extends Component {

  render() {

 
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/home" component={Discover}/>
            <Route path="/popular" component={Popular}/>
            <Route path="/my-list" component={MyList} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
