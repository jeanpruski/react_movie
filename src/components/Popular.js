import React from 'react';
import logo from '../likelogo.svg';
import logo2 from '../likelogo2.svg';
import { NavLink } from "react-router-dom";


class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      newMovies: [],
      currentPage: 1,
      moviesPerPage: 2,
      styleLike: {
        position: 'absolute',
        top: '50px',
        right: '-7px',
        height: 70,
        width: 55,
        transition: 'all 0.5s ease-in-out',
        backgroundPosition: 'center',
        cursor: 'pointer',
        transform: 'scale(1.15) rotate(20deg)',
        backgroundImage: logo,
      }
    };
    this.onLikePopular = this.onLikePopular.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = async () => {
    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log('data', data.results);

        this.setState({
          newMovies: data.results
        })
      });
    }

    onLikePopular() {
      this.props.onLikeFn();
    }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    console.log(this.state.newMovies);
    }

  render() {
    const { newMovies, currentPage, moviesPerPage } = this.state;

    // Logic for displaying movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = this.state.newMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const movieList = currentMovies.map((movie, index) => {
    let urlImg = `https://image.tmdb.org/t/p/w400${ movie.poster_path }`;
    return <li 
            className="card col-12 col-md-6 mb-3"
            key={index}>

            <h5 
              className="card-title"
              style={{
                fontSize: '1.5rem',
                marginTop: 15,
                marginBottom: 10,
                color: 'white',
                textTransform: 'uppercase',
                textAlign: 'center',
                minHeight: 60,
                padding: '0 30px',
                display: 'flex',
                lineHeight: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '2px',
              }}>
              <span>
                <em
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 300,
                    textTransform: 'capitalize',
                  }}>Film n°{currentPage * 2 + index - 1}. </em> {movie.title}
                </span>
            </h5>

            <img 
              className="card-img-top mt-0" 
              style={{
                borderRadius: 15,
              }}
              src={urlImg} 
              alt={movie.title}
            />

            <p
              style={{
                color: '#2d2d2d',
                marginBottom: 20,
                textAlign: 'justify',
              }}
              className="card-texte mt-3 mb-3">
              {movie.overview}
            </p>
            <NavLink
              to="my-list"
              onClick={() => this.onLikePopular(

                console.log("Movie", movie),

                
                {
                // myMovieList: movie,
                // date: movie.release_date,
                // original_language: movie.original_language,
                // id: movie.id,
                // poster_path: `https://image.tmdb.org/t/p/w400${movie.poster_path}`,
                // overview: movie.overview,
              }
              
              )}
              className='like'
              style={this.state.styleLike}
            ></NavLink>
          </li>;
  });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newMovies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          className="boutonNav"
          onClick={this.handleClick}
          style={{
            color: 'white',
            borderRadius: '10vw',
            textAlign: 'center',
            padding: 'calc(1vw - 5px) 0',
            fontWeight: 'bold',
            width: '5vw',
        }}>
          {number}
        </li>
      );
    });


    return (
      <div
        style={{
          marginBottom: '8vw',
        }}>

        <h1
        style={{
          color: '#2d2d2d',
          marginTop: 80,
        }}
        >Films populaires
        </h1>
        <p
          className="mb-3"
        >Découvrez les 20 films les plus populaires du moment.</p>

        <ul
        style={{
          zIndex: '1 !important'
        }}
        className="row">
          {movieList}
        </ul>

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            marginBottom: 20,
          }}>

          <ul
            id='boutonNav'
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              margin: 'auto',
            }}>
            {renderPageNumbers}
          </ul>
        </div>

      </div>
    );
  }
}

export default Popular;
