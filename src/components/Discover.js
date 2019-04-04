import React from 'react';

class Discover extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      randomMovies: [],
      
    };
  }

  componentDidMount = async () => {
    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log('data', data.results);

        this.setState({
          randomMovies: data.results
        })
      });
    }

  render () {
    return(
      <div>
        <h1
        style={{
          color: '#2d2d2d',
          marginTop: 80,
        }}>Découvrir des films</h1>
        <p>Découvrez ici un film au hasard</p>
      </div>
    );
  }
};

export default Discover;
