import React from 'react';
 

class Popular extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      movies: [],
      moviesOdd: [],
      moviesEven: [],
    };

    this.renderList = this.renderList.bind(this);
  }

  componentDidMount = async () => {
    const API_KEY = "0e8950f53586e7cabd8650ab3a2440fe";
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // console.log('data', data.results);
        this.setState({
          movies: data.results
        })
      });
    }

  renderList() {

    let styleCard = {
      marginBottom: 20,
    }

    const movieList = this.state.movies.map((movie, index) => {
      let urlImg = `https://image.tmdb.org/t/p/w400${ movie.poster_path }`;
      return <li className="card col-12 col-sm-6 col-md-4" style={styleCard} key={index}><img className="card-img-top mt-3" src={urlImg} alt={movie.title} /><div><h5 className="card-title">{movie.title}</h5><p className="card-texte">{movie.overview}</p></div></li>;
    });
    
    console.log('Movie List', movieList);

    return movieList;

  }

  render () {

    return(
        <div className="container">
          <p className="row">Popular</p>

          <ul className="row">
            {this.renderList()}
          </ul>
        </div>
    );
  }
};

export default Popular;