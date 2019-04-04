import React from 'react';
import { relative } from 'path';

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
        transition: 'all 2s rease-in-out',
        backgroundPosition: 'center',
        cursor: 'pointer',
        transform: 'scale(1.15) rotate(20deg)',
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.likeOnClick = this.likeOnClick.bind(this);
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

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    console.log(this.state.newMovies);
    }

    likeOnClick() {
      // console.log(this.state.styleLike.position);
      if(this.state.styleLike.top === '50px') {
        this.setState({
          styleLike: {
            position: 'absolute',
            top: '-30px',
            right: '-7px',
            height: 70,
            width: 55,
            transform: 'scale(1.4) rotate(-10deg)',
            cursor: 'pointer',
            backgroundImage: 'url(/static/media/likelogo2.4cf4b4bc.svg)',
          }
        })
        console.log('Film ajouté à votre Liste');

      } else {
        this.setState({
          styleLike: {
            position: 'absolute',
            top: '50px',
            right: '-7px',
            height: 70,
            width: 55,
            transition: 'all 2s rease-in-out',
            backgroundPosition: 'center',
            cursor: 'pointer',
            transform: 'scale(1.15) rotate(20deg)',
            backgroundImage: 'url(/static/media/likelogo.18896eaa.svg)',
          }
        })
        console.log('Film retiré de votre Liste');

      }


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
              onClick={this.likeOnClick}
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
              src={urlImg} 
              alt={movie.title}
            />

            <p
              style={{
                color: '#2d2d2d',
                marginBottom: 20,
                textAlign: 'justify',
              }}
              className="card-texte mt-3">
              {movie.overview}
            </p>
            <div
              onClick={this.likeOnClick}
              className='like'
              style={this.state.styleLike}
            ></div>
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
        <p>Découvrez les 20 films les plus populaires du moment.</p>

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
