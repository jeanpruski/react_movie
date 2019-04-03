import React from 'react';

class Card extends React.Component {

  render () {

    console.log(this.props.movie);

    return (
      <div>
        <ul className="list-group">
          { this.props.movie }
        </ul>
      </div>
    );
  }
}

export default Card;