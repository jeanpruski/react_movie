import React from 'react';
// import logo from '../likelogo.svg';

// import { relative } from 'path';

class MyList extends React.Component {

  constructor() {
    super();
    this.state = {
      styleCrossBtn: {
        borderRadius: 30,
        position: 'absolute',
        right: 5,
        top: -15,
        height: 40,
        width: 40,
        color: 'white',
        boxShadow: '2px 2px 10px #605f5f',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        fontWeight: 'bold',
      }
    };

    this.onPrint = this.onPrint.bind(this);
  }

  onPrint() {
    window.print();
    // const movies = this.props;

    // console.log(movies);
  }



  render() {

    // const movies = this.props;
    // console.log(movies);

    const moviesDisplay = this.props.movies.map((movie, index) => {
      return <li
        key={index}
        
        className="badgeList"
        style={{
          position: 'relative',
          display: 'flex',
          marginBottom: 20,
          padding: 15,
          borderRadius: 10,
          justifyContent: 'space-between',
        }}>
        <div>
          <h2
            style={{
              textTransform: 'uppercase',
            }}
          >{movie.title}</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: 15,
            }}
          >
            <p
              style={{
                letterSpacing: '5px',
                fontWeight: 600,
              }}
            >{movie.date}</p>

            <p
              style={{
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >{movie.original_language}</p>

            <p
              style={{
                letterSpacing: '5px',
                fontWeight: 500,

              }}
            >{movie.id}</p>
          </div>
          <div>
            <p
              className="pStyle"
              style={{
                textAlign: 'justify',
                marginTop: 5,
                backgorundColor:  'red',
                // overflow: 'scroll',
                minHeight: 130,
                fontWeight: 200,
              }}
            >{movie.overview}</p>
          </div>
        </div>

        <img
          alt="Movie Cover"
          style={{
            borderRadius: 10,
            height: '180px',
          }}
            className="img-fluid"
            src={movie.poster_path}
          />

        <div
          onClick={() => this.props.onRemoveFn(index)}
          className='crossBtn'
          style={this.state.styleCrossBtn}
        >
          X
        </div>
      </li>
    })
  
    // const movieList = 

    return(
      <div
        style={{
          marginBottom: 50,
        }}
      id='paddingRightKill'>
        <div
          style= {{
            position: 'relative',
          }}
        >
            <div
              id="forPrint"
              style={{
                position: 'fixed',
                top: '10px',
                fontSize: '2.4rem',
                fontWeight: 700,
              }}>
            // COUCOUCINÉ</div>
            <h1
              style={{
                marginTop: 80,
                color: '#2d2d2d',
              }}>
              Ma Liste
            </h1>

            <p
              className="mb-3"
            >Retrouvez ici les différents films que vous avez sélectionné.</p>
            <div
              onClick={this.onPrint}
              id="btnPrint"
              style={{
                height: 42,
                width: 110,
                position: 'absolute',
                top: 5,
                right: 0,
                borderRadius: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '2px 2px 20px #605f5f',

              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  letterSpacing: '4px',
                }}
              ><i className="fas fa-file-download"></i> PDF</p>
            </div>
          </div>

          <ul
            className="col-12 col-xl-10 offset-xl-1"
            style={{
              margin: 'auto !important',
              padding: 'Opx !important',
              display: 'flex',
              flexDirection: 'column-reverse',
            }}
          >
           {moviesDisplay}
          </ul>
      </div>
   );
  }
};

export default MyList;
