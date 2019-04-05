import React from 'react';

let min = 480;
let max = 519;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
let URL = `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=${API_KEY}`;

class Discover extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovie: [],
      randomNumber : randomNumber
    };
  }

  componentDidMount = async () => {


    console.log('NIK TT', this.state.randomNumber);

    
    function testURL() {

    //   fetch(URL)
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.status === 'Released'){
    //       console.log('SUCCESS', data.status);
    //     } else {
    //       console.log('ERROR', data.status);
    //       let newRandomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
    //       let URL = `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=${API_KEY}`;
    //       testURL(URL);
    //       // testURL(URL);
    //     }
    //   });
    }


    // testURL(URL);

    
    // fetch(URL)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       randomMovie: data
    //     })
    //   });

    }

  render () {
    console.log('randomMovie', this.state.randomMovie);

    let urlImg = `https://image.tmdb.org/t/p/w400${this.state.randomMovie.poster_path}`;

    return(
      <div
        className="container">
        <h1
        style={{
          color: '#2d2d2d',
          marginTop: 80,
        }}>Découvrir des films</h1>
        <p>Découvrez ici un film au hasard</p>

        <div
          className="row xtremCard" 
          style={{
            padding: 20,
            borderRadius: 30,
          }}>
          
          <h2
            style={{
              width: '100%',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: "2px",
              marginTop: 10,
              marginBottom: 20,
              color: 'white',
              fontWeight: 300,
            }}>
            {this.state.randomMovie.title}
          </h2>

          <div
            className="row"
          >
            <div
              className="col-12 col-md-4 col-lg-3"
              style={{
                width: '100%',
                height: 360,
                overflow: 'hidden',
                display: 'flex',
                alignItem: 'center',
              }}>
              <img
                style={{
                  width: '100%',
                }}
                src={urlImg}
              />
            </div>

            <div
            className="col-12 col-md-8 col-lg-9"
            >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <p>{this.state.randomMovie.original_title}</p>
              <p>{this.state.randomMovie.original_language}</p>
              <p>{this.state.randomMovie.release_date}</p>

              <p>{this.state.randomMovie.id}</p>
            </div>

            <p
                style={{
                  textAlign: 'justify',
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
