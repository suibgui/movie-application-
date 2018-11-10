import React, { Component } from "react";

class Movie extends Component {
  

  render() {
    return (
      <div className="movie">
        <div className="movie-img">
          <div className="movie-rank">
            {this.props.rank.split("").map(x => {
              return <Star />;
            })}
          </div>
          <img src={this.props.img} className="img" />
        </div>
        <div className="movie-name">
          <b>{this.props.name}</b>
        </div>
      </div>
    );
  }
}
export default Movie;

const Star = () => {
  return <span className="rank-star">★</span>;
};

