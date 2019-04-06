import React from 'react';

class MyList extends React.Component {
  render() {

    const movies = this.props;
    console.log(movies);

    const moviesDisplay = this.props.movies.map((movie, index) => {
      return <li
        key={index}
        onClick={() => this.props.onRemoveFn(index)}
        className="badgeList"
        style={{
          display: 'flex',
          marginBottom: 20,
          padding: 10,
          borderRadius: 10,
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
        <div>
          <h3>{movie.title}</h3>
          <div>
            <p>{movie.date}</p>
            <p>{movie.original_language}</p>
            <p>{movie.id}</p>
          </div>
          <div>
            <p>{movie.overview}</p>
          </div>
        </div>

        <img
              style={{
                borderRadius: 10,
                height: '130px',
              }}
                className="img-fluid"
                src={movie.poster_path}
              />
      </li>
    })
  
    // const movieList = 

    return(
      <div id='paddingRightKill'>
        <h1
          style={{
            marginTop: 80,
            color: '#2d2d2d',
          }}>
          Ma Liste
        </h1>

        <p
          className="mb-3"
        >Retrouvez ici les différents films que vous avez choisi.</p>


          <ul
            className="col-12 col-xl-10 offset-xl-1"
            style={{
              margin: 'auto !important',
              padding: 'Opx !important',
            }}
          >
           {moviesDisplay}
          </ul>
      </div>
   );
  }
};

export default MyList;
