import React from 'react';
import urlProb from '../affiche.svg';
import load from '../load.gif';

// import { formatWithOptions } from 'util';

class Discover extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovie: [],
      urlImg: "",
      urlProb: 'coucou',
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.reloadMovie = this.reloadMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();   
    }

  reloadMovie() {
    // this.setState({
    //   urlImg: load,
    // })
    this.fetchMovie();  

  }

  fetchMovie() {
    this.setState({
      urlImg: load,
    })

    let min = 0;
    let max = 100000;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    let URL = `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=${API_KEY}`;

    // console.log('URL', URL)

    fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'Released'){
        // console.log('SUCCESS', data.status);

        fetch(URL)
          .then(res => res.json())
          .then(data => {
            this.setState({
              randomMovie: data
            })
            // console.log('poster path', this.state.randomMovie.poster_path)

            if(this.state.randomMovie.poster_path === null) {
              console.log("pas d 'image");
              this.setState({
                urlImg: urlProb,
              })
            } else {
              this.setState({
                urlImg: `https://image.tmdb.org/t/p/w400${this.state.randomMovie.poster_path}`,
              })
            }
          });
      } else {
        // console.log('ERROR', data.status);
        this.fetchMovie();
      }
    });
  }
  

  render () {

    return(
      <div
        className="container-fluid">
        <h1
        style={{
          color: '#2d2d2d',
          marginTop: 80,
        }}>Découvrir des films</h1>

        <p
          className="mb-2"
        >Découvrez ici un film au hasard</p>

        <div
          className="row xtremCard" 
          style={{
            padding: 20,
            borderRadius: 10,
          }}>
          
          <div
            className="row"
          >
          
            <div
              className="col-12 col-lg-4 gradient"
              style={{
                // width: '100%',
                minWidth: 300,
                minHeight: 360,
                height: '40vh',
                borderRadius: 30,
                display: 'flex',
                padding: 10,
                marginBottom: 50,
              }}>

            <div
              onClick={this.reloadMovie}
              id="discrushBtn">
              </div>


              <div
                id="crushBtn"
                >                
            </div>

              <img
              style={{
                borderRadius: 10,
                margin: 'auto',
                height: '100%',
                zIndex: 5,
                transform: 'scale(1.12) translateY(20px)',
              }}
                className="img-fluid"
                src={this.state.urlImg}
              />
            </div>



            <div
            style={{
            }}
            className="col-12 col-lg-8"
            >

            <h2
              id="titleMovieRandom"
              style={{
                width: '100%',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: "2px",
                marginTop: 10,
                marginBottom: 20,
                fontWeight: 500,
              }}>
              {this.state.randomMovie.title}
            </h2>

            <div
              style={{
                // width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                background: 'white',
                borderRadius: 20,
                opacity: 0.8,
                margin: '0px !important',
              }}
            >


              {/* <p>

              {this.state.randomMovie.original_title}</p> */}

              <p
                style={{
                  fontWeight: 'bold',
                  backgroundColor: 'red',
                }}
              >{this.state.randomMovie.release_date}</p>

              <p>V.o. : {this.state.randomMovie.original_language}</p>

              <p>Id: {this.state.randomMovie.id}</p>
            </div>

            <p
                style={{
                  textAlign: 'justify',
                  marginTop: 10,
                }}
              >{this.state.randomMovie.overview}</p>

            </div>

          </div>
        </div>
      </div>  

    );
  }
};

export default Discover;
