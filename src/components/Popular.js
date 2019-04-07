import React from 'react';
import logo from '../likelogo.svg';
// import logo2 from '../likelogo2.svg';
// import { NavLink } from "react-router-dom";


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
      },
      styleModalEnter: {
        display:'flex',
        zIndex: '5000 !important',
        position: 'fixed',
        top: -80,
        left: 0,
        width: '100%',
        height: 'calc(100% + 80px)',
        color: 'white',
        // backgroundColor: 'red',
      }
    };
    // this.onLikePopular = this.onLikePopular.bind(this);
    // this.onLikeDiscover = this.onLikeDiscover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.shutdownModal = this.shutdownModal.bind(this);
  }

  shutdownModal() {
    console.log('coucou');
    this.setState({
      styleModalEnter: {
        // display:'none',
        position: 'fixed',
        top: -80,
        left: 800,
        width: '0',
        height: '0',
        color: 'red',
        opacity: 0,
      }
    })
  }

  componentDidMount = async () => {
    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // console.log('data', data.results);

        this.setState({
          newMovies: data.results
        })
      });
    }

    // onLikePopular() {
    //   this.props.onLikeFn();
    // }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    // console.log(this.state.newMovies);
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
          
            {/* <NavLink
              to="my-list"

              onClick={() => this.onLikeFn(
                // console.log('coucou'),
                {
                  myMovieList: movie,
                  date: movie.release_date,
                  original_language: movie.original_language,
                  id: movie.id,
                  poster_path: `https://image.tmdb.org/t/p/w400${movie.poster_path}`,
                  overview: movie.overview,
                }
              )}
              className='like'
              style={this.state.styleLike}
            ></NavLink> */}

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
      <div>
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


        <div
          id='modalEnter'
          style={this.state.styleModalEnter}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              opacity: 0.9,
              margin: 'auto 50px',
            }}
          >
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 100,
                marginTop: 90,
                transform: 'scale(1.3)',
              }}
            >
              <div id="logoModalTitle"></div>
              <h1
                style={{
                  marginTop: 8,
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textShadow: "2px 2px 10px black",
                }}
              >COUCOUCINÉ</h1> 
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: 400,
                transform: 'translateX(-40px) rotate(-1deg)',
              }}
            >
              <div
                id="window1"
                className="windows"
              ></div>

              <p
                style={{
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  lineHeight: '1.4rem',
                  // fontWeight:100,
                }}
              >Découvrez les films les plus populaires de la plateforme.</p>

                <div 
                  id="arrow1"
                  style={{
                    position: 'absolute',
                    top: -30,
                    left: 120,
                    height: 40,
                    width: 40,
                    transform: 'rotate(-15deg)',
                    opacity: 0.4,
                  }}>
                </div>

            </div>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row-reverse',
                maxWidth: 400,
                marginTop: 30,
                transform: 'translateX(40px) rotate(1deg)',

              }}
            >
              <div
                id="window2"
                className="windows"
              ></div>
              <p
                style={{
                  textAlign: 'right',
                  fontSize: '1.3rem',
                  lineHeight: '1.4rem',
                  // fontWeight:100,
                }}
              >Générez un film aléatoirement et de magnifiques histoires.</p>

                <div 
                  id="arrow2"
                  style={{
                    position: 'absolute',
                    top: -30,
                    right: 100,
                    height: 40,
                    width: 40,
                    transform: 'rotate(20deg)',
                    opacity: 0.4,
                  }}>
                </div>
              
            </div>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: 400,
                marginTop: 30,

                transform: 'translateX(-40px) rotate(1deg)',
              }}
            >
              <div
                  id="window3"
                  className="windows"
                ></div>
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  lineHeight: '1.4rem',
                  // fontWeight:100,
                }}
              >Ajoutez, retirez et enregistrez votre liste de film.</p>

                <div 
                  id="arrow3"
                  style={{
                    position: 'absolute',
                    top: -30,
                    left: 110,
                    height: 40,
                    width: 40,
                    transform: 'rotate(-30deg)',
                    opacity: 0.4,
                  }}>
                </div>

            </div>



              {/* <p
                style={{
                  textAlign: 'right',
                  fontSize: '1.3rem',
                  lineHeight: '1.4rem',
                  marginTop: '50px',
                  fontWeight:100,
                }}
              >Courrez acheter du Pop-Corn !!</p> */}



            <h4
              id="enter"
              onClick={this.shutdownModal}
              style={{
                marginTop: 50,
                cursor: 'pointer',
              }}
            >Créer une liste !</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
