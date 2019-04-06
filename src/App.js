import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Discover from './components/Discover';
import Popular from './components/Popular';
import MyList from './components/MyList';
import Error from './components/Error';

import './bootstrap.min.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        isAdult: false,
        titleNav: 'cou',
        titleStyle: {
          fontStyle: 'normal',
          color: '#2d2d2d',
        },
      }
      this.changeTitleNav = this.changeTitleNav.bind(this);

  }

  changeTitleNav() {
    if(this.state.titleNav === 'cou') {
      this.setState({
        isAdult: true,
        titleNav: 'couille',
        titleStyle: {
          fontStyle: 'normal',
          color: 'white',
        },
      })
    } else {
      this.setState({
        isAdult: false,
        titleNav: 'cou',
        titleStyle: {
          fontStyle: 'normal',
          color: '#2d2d2d',
        },
      })      
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Nav
          onClickFn={this.changeTitleNav}
          isAdult={this.state.isAdult}
          titleStyle={this.state.titleStyle}
          titleNav={this.state.titleNav}  
        />
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
