import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Discover from './components/Discover';
import Popular from './components/Popular';
import MyList from './components/MyList';
import Error from './components/Error';
import Affiche from '../src/affiche.svg';

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
            title: 'Lorem movie',
            date: '',
            original_language: '',
            id: '',
            overview: 'Voici un exemple de film dans votre liste, vous avez la possibilité de le supprimer en cliquant sur la croix.',
            poster_path: Affiche,
          },

        ],
      }
      this.changeTitleNav = this.changeTitleNav.bind(this);
      this.onLikeMovie = this.onLikeMovie.bind(this);
      this.onRemove = this.onRemove.bind(this);

  }

  onRemove(index) {
    // const myNewMovieList = this.state.myMovieList;
    // myNewMovieList
    let newMovieList = this.state.myMovieList;
    newMovieList.splice(index, 1);
    this.setState({
      myMovieList: newMovieList,
    })
  }



  onLikeMovie(movie) {
    const newMovieList = this.state.myMovieList;
    // console.log('New Movies List', newMovieList);
    newMovieList.push(movie);
    // console.log(newMovieList);

    // this.setState({
    //   myMovieList: newMovieList
    // });
    // console.log('MyMovieList', this.state.myMovieList);
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
            {/* <Route
              path="/discover" 
              component={(props) => <Discover isAdult={this.state.isAdult} onLikeFn={this.onLikeMovie} />}
            /> */}
            

            <Route path="/" component={(props) => <Popular onLikeFn={this.onLikeMovie} />}  exact/>

            <Route 
              path="/my-list" 
              component={(props) => <MyList movies={this.state.myMovieList} onRemoveFn={this.onRemove}/>}   
            />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
