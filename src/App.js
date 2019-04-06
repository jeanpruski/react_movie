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
        displayStyle: {
          display: 'flex',
        },
        myMovieList: [
          {
            title: 'Ninja Resurrection',
            date: '1997-02-27',
            original_language: 'JA',
            id: 31141,
            overview: 'NINJA NINJA NINJA NINJA ⚔️',
            poster_path: 'https://image.tmdb.org/t/p/w400/lIJrQKK2ZxNNryL34AmoSfpw8Gr.jpg',
          },
          {
            title: 'Ninja Resurrection 2',
            date: '1999-03-07',
            original_language: 'JA',
            id: 54141,
            overview: 'NINJA NINJA NINJA NINJA 🔪',
            poster_path: 'https://image.tmdb.org/t/p/w400/lIJrQKK2ZxNNryL34AmoSfpw8Gr.jpg',
          },
        ],
      }
      this.changeTitleNav = this.changeTitleNav.bind(this);
      this.onLikeMovie = this.onLikeMovie.bind(this);

  }

  onLikeMovie(data) {
    // const newMovieList = this.state.items;
    // newMovieList.push(data);
    // this.setState({
    //   myMovieList: newMovieList,
    // })
    console.log('MyMovieList', this.state.myMovieList);
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
        displayStyle: {
          display: 'none',
        }
      })
    } else {
      this.setState({
        isAdult: false,
        titleNav: 'cou',
        titleStyle: {
          fontStyle: 'normal',
          color: '#2d2d2d',
        },
        displayStyle: {
          display: 'flex',
        }
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
          displayStyle={this.state.displayStyle}  
        />
        <div className="container">
          <Switch
            isAdult={this.state.isAdult}
          >


            <Route
              path="/discover" 
              component={(props) => <Discover isAdult={this.state.isAdult} onLikeFn={this.onLikeMovie} />}
            />
            
            <Route path="/" component={Popular} exact/>

            <Route 
              path="/my-list" 
              component={(props) => <MyList movies={this.state.myMovieList} />}   
            />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
