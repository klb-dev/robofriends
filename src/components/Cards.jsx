
import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <div className='tc bg-light-green dib dr3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${this.props.id}?200x200`} />
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Cards;