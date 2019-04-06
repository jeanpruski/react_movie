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
      titleAdult: '',
      styleCoucou: {
        color: 'grey',
      }
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.reloadMovie = this.reloadMovie.bind(this);
    this.displayMovie = this.displayMovie.bind(this);
    this.displayPorno = this.displayPorno.bind(this);
  }

  componentDidMount() {
    this.displayPorno(); 
    this.fetchMovie();  
    }


  // Func qui remet une vidéo aléatoirement
  reloadMovie() {
    this.fetchMovie();  
  }

  //Func qui affiche "Porno" dans le titre sur Discover
  displayPorno() {
    if(this.props.isAdult === true) {
      this.setState({
        titleAdult: ' (+18)',
        styleCoucou: {
          color: '#f26878',
        }
      })
    } 
  }

  // Func qui prend une vidéo aléatoirement
  fetchMovie() {
    this.setState({
      urlImg: load,
    })

    let min = 0;
    let max = 90000;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    let URL = `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=${API_KEY}`;

    // console.log('URL', URL)

    fetch(URL)
    .then(res => res.json())
    .then(data => {
      if(this.props.isAdult === true) {

        //Condition qui check si l'id existe et si adulte
        if (data.status === 'Released' && data.adult === true && data.title !== null && data.overview !== (null || "" || "...")){
          console.log('SUCCESS', data);

          fetch(URL)
            .then(res => res.json())
            .then(data => {
              this.setState({
                randomMovie: data
              })
              // console.log('poster path', this.state.randomMovie.poster_path)

              this.displayMovie();

            });
        } else {
          // console.log('ERROR', data.status);
          this.fetchMovie();
        }
      }
      // Sinon renvoi un film avec id correct et tout public
      else {
        if (data.status === 'Released' && data.adult === false && data.overview !== (null || "")){
          console.log('SUCCESS', data);

          fetch(URL)
            .then(res => res.json())
            .then(data => {
              this.setState({
                randomMovie: data
              })
              // console.log('poster path', this.state.randomMovie.poster_path)

              this.displayMovie();

            });
        } else {
          // console.log('ERROR', data.status);
          this.fetchMovie();
        }
      }

    });
  }

  // Func qui affiche l affiche du film
  displayMovie() {
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
  }


  render () {

    console.log('props', this.props);
    // console.log('state', this.state);

    return(
      <div
        // className="container-fluid"
        >
        <h1
        style={{
          color: '#2d2d2d',
          marginTop: 80,
        }}>Découvrir des films 
          <em
          style={{
            fontStyle: 'normal',
            color: 'pink',
          }}> {this.state.titleAdult}
          </em>
        </h1>

        <p
          className="mb-3"
        >Découvrez ici des films au hasard de la base de données IMDb</p>

        <div
          className="row xtremCard" 
          style={{
            padding: 20,
            borderRadius: 30,
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row !important',
          }}>
          
          <div
            style={{
              width: '100% !important',
            }}
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
            style={this.state.styleCoucou}
            className="col-12 col-lg-8"
            >

            <h2
              className="col-12"
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
              className="col-12"
              style={{
                // width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                background: 'white',
                borderRadius: 30,
                padding: 5,
                opacity: 0.8,
                margin: '0px !important',
              }}
            >


              {/* <p>

              {this.state.randomMovie.original_title}</p> */}

              <p
                style={{
                  fontWeight: 'bold',
                  backgroundColor: 'lightgrey',
                  padding: '10px 20px',
                  borderRadius: 30,
                  letterSpacing: '2px',
                }}
              >{this.state.randomMovie.release_date}</p>

              <p
                style={{
                  backgroundColor: 'darkgrey',
                  padding: '10px 20px',
                  borderRadius: 30,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >VO. : {this.state.randomMovie.original_language}</p>

              <p
                style={{
                  color: 'white',
                  fontWeight: 'bold',                  
                  backgroundColor: 'grey',
                  padding: '10px 20px',
                  borderRadius: 30,
                  letterSpacing: '2px',
                }}
              >Id: {this.state.randomMovie.id}</p>
            </div>

            <p
                style={{
                  textAlign: 'justify',
                  marginTop: 10,
                  color: 'grey',
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
