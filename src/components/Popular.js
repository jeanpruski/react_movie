import React from 'react';


// let movieList = undefined;

class Popular extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      movies: [],
    };

    this.renderList = this.renderList.bind(this);
  }

  componentDidMount = async () => {
      const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
      const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          console.log('data', data.results);
          this.setState({
            movies: data.results
          })
        });
      }

  renderList() {
    const movieList = this.state.movies.map((movie, index) => {
      let urlImg = `https://image.tmdb.org/t/p/w400${ movie.backdrop_path }`
      return <li key={index}><img src={urlImg} />{movie.title} <em>{movie.overview}</em></li>;
    });
    return movieList;
  }

  render () {

    return(
      <div
        style = {{
      }}>

        <p>Popular</p>

        <ul>
          {this.renderList()}
        </ul>

      </div>
    );
  }
};

export default Popular;



