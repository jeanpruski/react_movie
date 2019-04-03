import React from 'react';

const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
const FETCH = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

class Popular extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      movies: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = async () => {
    const api_call = await fetch(FETCH);
    const data = await api_call.json();
    let index = 0;
    let newMovies;

    while (index < 10) {
      // console.log(index);
      newMovies = this.state.movies;
      newMovies.push(data.results[index]); 
      // console.log(newMovies[index].title);

      index = index + 1;
    }
  
  
    let listMovies = this.state.movies.map((movies) =>
      <li>{movies}</li>
    );

    console.log('coucou', listMovies);
    console.log('movies', this.state.movies.map(movies));



  }




  // componentDidMount = async () => {
  //   // console.log(FETCH);    
  //   const api_call = await fetch(FETCH);
  //   const data = await api_call.json();
  //   // console.log('Data', data.results[0]);

  //   const newMoviesImg = [];  
  //   const newMoviesTitle = [];  
  //   const newMoviesDescription = [];  

  //   let index = 0;
  //   console.log('test entree', index);



  //   this.setState({
  //     movieImg : `https://image.tmdb.org/t/p/w400${data.results[index].backdrop_path}`,
  //     movieTitle : data.results[index].title,
  //     movieDescription : data.results[index].overview,
  //   });

  //   newMoviesImg.push(this.state.movieImg);
  //   newMoviesTitle.push(this.state.movieTitle);
  //   newMoviesDescription.push(this.state.movieDescription);


  //   // console.log(newMoviesImg[i]);
  //   // console.log(newMoviesTitle[i]);
  //   // console.log(newMoviesDescription[i]);
  //   // console.log('props', this.state);

  //   // console.log('props', this.state);



  //   // console.log('test sortie', index);
  //   // console.log(newMoviesImg);
  //   console.log(newMoviesTitle);
  //   // console.log(newMoviesDescription);
  // }


  render () {





    return(
      <div
        style = {{
        }}
      >
        <p>Popular</p>

        {/* ---------- */}

        <div
          style={{
            marginBottom: 20,
          }}
        >

          <div
            style={{
              backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '400px',
              overflow: 'hidden',
              borderRadius: 30,
              margin: 'auto',
            }}>
            <img
              className="img"
              style={{
              }}
              src={this.state.movieImg}
            />
          </div>

          <h3
            style={{
              padding: 20,
              paddingBottom: 0,
            }}
          >
           {this.state.movieTitle}
          </h3>

          <p
            style={{
              padding: 20,
              paddingTop: 0,
              textAlign: 'justify',
            }}
          >
            {this.state.movieDescription}
          </p>

        </div>

        {/* ---------- */}

          {/* <ul>
          {newMovies.map((index) => {
            return (
              <p key={index}> {index} </p>
            );
          })}
          </ul> */}

    {/* <ul>{listMovies}</ul> */}





      </div>
    );
  }
};

export default Popular;



